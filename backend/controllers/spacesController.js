const mongoose = require('mongoose');
const axios = require('axios');
const spacesHandler = require('../handlers/spaces-handler');
const imagesHandler = require('../handlers/images-handler');
require('../models/Space');
require('../models/User');
require('../models/CustomerRequest');
const Space = mongoose.model('Space');
const User = mongoose.model('User');
const CustomerRequest = mongoose.model('CustomerRequest');
const constants = require('../constants');


  exports.getUserSpaces = async (req, res, next) => {
    try {
      const { email } = req.user;
      const spaces = await spacesHandler.getUserSpaces(email);

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
      // console.log('update many >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.');
      // const tst = await Space.find();
      // console.log('tsttttttttt >>> **** ', tst)
      // await Space.updateMany({}, {$unset: {'image':1}});
      // await Space.updateMany({}, {$unset: {'titleImage':1}});
      // await Space.update({},
      //   [
      //     {
      //       '$set': {
      //         'imgMain': {
      //           url: '$image',
      //           fileName: '',
      //           fileId: '',
      //         },
      //         'imgTitle': {
      //           url: '$titleImage',
      //           fileName: '',
      //           fileId: '',
      //         }
      //       }
      //     }
      //   ])
      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

     return res.status(200).send(spaces);

    } catch(err) {
      next(err);
    }
  }

  exports.getCityPlacemarks = async (req, res, next) => {
    try {
      const { city } = req.params;

      const filterData = {
        publishStatus: constants.COMPANY_PUBLISH_STATUS_COMPLETE,
        city
       };
 
      const response = await Space.find(filterData);
      
      const placemarks = response
      .filter((s) => s.location.lat && s.location.lng)
      .map(r => {
        const lat = parseFloat(r.location.lat);
        const lng = parseFloat(r.location.lng);
        
        return {
          name: r.name,
          id: r._id,
          slug: r.slug,
          location: {
            ...r.location,
            lat,
            lng
          }
        };
      })

      return res.status(200).send({ data: response || [], placemarks: placemarks || [] });

    } catch(err) {
      next(err);
    }
  }
  
  exports.getPaginatedSpaces = async (req, res, next) => {
    try {
    const { currentPage, city, tagData } = req.params;

    const page = parseInt(currentPage) || 1;
    // const limit = constants.PAGINATION_COMPANIES_PAGE;
    const limit = 20;
    const skip = page * limit - limit;

   let filterData = {
    publishStatus: constants.COMPANY_PUBLISH_STATUS_COMPLETE
   };

    if (tagData !== 'allTags') {
      filterData = {
        ...filterData,
        city,
        tags: tagData,
      };
    } else {
      filterData = {
        ...filterData,
        city,
      };
    }

    // 1. Paginated Spaces
    const spacesPromise = Space.find(filterData)
    .skip(skip)
    .limit(limit)
    .sort({ created: 'desc' });

    // 2. Pagination Stats
    const countPromise = Space.find(filterData).countDocuments();
    
    // 3. Map Data (city, tags)
    const mapDataPromise = Space.find(filterData);

    // 4. Tags Data (city)
    const tagsSearchCityDataPromise = Space
    .find({publishStatus: constants.COMPANY_PUBLISH_STATUS_COMPLETE, city});

    // GET DATA
    const [data, count, mapData, tagsSearchCityData] = await Promise.all([
      spacesPromise, countPromise, mapDataPromise, tagsSearchCityDataPromise]);

    // Massage Data
    const pages = Math.ceil(count / limit);

    // Active Tags Data
    const activeTags ={};
    tagsSearchCityData.forEach((s) => {
      s.tags.forEach((tag) => {
        activeTags[tag] = true;
      });
    });

    const placemarks = mapData
    .filter((s) => s.location.lat && s.location.lng)
    .map(r => {
      const lat = parseFloat(r.location.lat);
      const lng = parseFloat(r.location.lng);
      
      return {
        name: r.name,
        id: r._id,
        location: {
          ...r.location,
          lat,
          lng
        }
      };
    })

    return res.status(200).send({ data, searchData: tagsSearchCityData, placemarks, activeTags, count, pages, page });
    
    } catch(err) {
      next(err);
    }
  }
  
  exports.getUserSpace = async (req, res, next) => {
    try {
      const { id } = req.params;
      const spaces = await spacesHandler.getUserSpace(id);
      return res.status(200).send(spaces);
      
    } catch(err) {
      next(err);
    }
  }

  exports.saveUserSpace = async (req, res, next) => {
    try {
      const { id, role } = req.user;
      const response =  await spacesHandler.saveUserSpace(req.body, id, role);
      
      return res.status(200).send(response);
    } catch(err) {
      next(err);
    }
  }

  exports.getCustomerRequests = async (req, res, next) => {
    try {
      const { id, role } = req.user;

     let requestsList = [];

     if (role !== 'admin') {
      const spaces = (await Space.find({ admin: id }));
      const spaceIds = spaces.map(r => r._id.toString());

      requestsList = await CustomerRequest.find({ 'space': { $in: spaceIds } });
     } else {
      requestsList = await CustomerRequest.find();
     }
     
      return res.status(200).send(requestsList);
    } catch(err) {
      next(err);
    }
  }

  exports.deleteCustomerRequest = async (req, res, next) => {
    try {
      const { id } = req.params;   
      await CustomerRequest.remove({ _id: id });

      return res.status(200).send('deleted');
    } catch (err) {
      next(err);
    }
  }

  exports.getFilteredUserSpaces = async (req, res, next) => {
    try {
      const { pending, text } = req.params;      
      const spaces = await spacesHandler.getFilteredUserSpaces(pending, text);
      
      return res.status(200).send(spaces);
    } catch(err) {
      next(err);
    }
  }

  exports.getFilteredUserSpacesByEmail = async (req, res, next) => {
    try {
      const { email } = req.params;      
      const spaces = await spacesHandler.getFilteredUserSpacesByEmail(email);
      
      return res.status(200).send(spaces || []);
    } catch(err) {
      next(err);
    }
  }

  exports.getSingleSpace = async (req, res, next) => {
    try {
      const { slug } = req.params;    
      const space = await Space.findOne({ slug });

      if (!space) {
        return res.status(200).send({space: null, spacesMore: null});
      }

      const spacesList = await Space.find({ 
        publishStatus: constants.COMPANY_PUBLISH_STATUS_COMPLETE,
        city: space.city 
      });
      
      const spaceIndex = spacesList.findIndex(s => s.slug === space.slug);
     
      const spacesMore = spacesList.slice(spaceIndex + 1, spaceIndex + 3);

      return res.status(200).send({space, spacesMore});
    } catch(err) {
      next(err);
    }
  }

  exports.deleteUserSpace = async (req, res, next) => {
    try {
      // 1) Delete images
      const space = await Space.findOne({ _id: req.params.id });
      const { imgMain, imgTitle } = space;

      await Promise.all([
        imagesHandler.deleteImage(imgMain.fileName, imgMain.fileId),
        imagesHandler.deleteImage(imgTitle.fileName, imgTitle.fileId)
      ])

      // 2. Delete space
      const response = await Space.findOneAndDelete({ _id: req.params.id});
      return res.status(200).send(response._id);  

    } catch(err) {
      next(err);
    }
  }

  exports.createCustomerRequest = async (req, res, next) => {
    try {
      const { slug, name, phone, message } = req.body;
      const space = await Space.findOne({ slug });

      if (!space) throw new Error('Space not found');

      if (space.publishStatus === constants.COMPANY_PUBLISH_STATUS_COMPLETE) {
        const customerRequest = new CustomerRequest({name, phone, message, spaceName: space.name, space: space._id});
        await customerRequest.save();
      }

      return res.status(200).send('complete');      
    } catch(err) {
      next(err);
    }
  }

  exports.toggleSpacePublish = async (req, res, next) => {
    try {
      const { slug } = req.params;   
      const space = await Space.findOne({ slug });

      if (space.publishStatus === constants.COMPANY_PUBLISH_STATUS_COMPLETE) {
        space.publishStatus = constants.COMPANY_PUBLISH_STATUS_PENDING
      } else {
        space.publishStatus = constants.COMPANY_PUBLISH_STATUS_COMPLETE
      }

      await space.save();
      
      return res.status(200).send(space);
    } catch (err) {
      next(err);
    }
  }

  exports.assignSpaceAdminEmail = async (req, res, next) => {
    try {
      const { slug, email } = req.body;   

      const space = await Space.findOne({ slug });
      const user = await User.findOne({ email });

      if (user) {
        space.admin = user._id;
        await space.save();
      }
      
      const spaceUpdated = await Space.findOne({ slug }).populate('adminDetails');
      return res.status(200).send(spaceUpdated);
    } catch (err) {
      next(err);
    }
  }


  // >>> BACKBLAZE B2
  exports.getUploadImageUrl = async (req, res, next) => {
    try {
      const uploadData = await imagesHandler.getUploadImageUrl();
      console.log('got upload url >>>>>>>> ', uploadData);
      const {authorizationToken, uploadUrl } = uploadData;

      return res.status(200).send({authorizationToken, uploadUrl});

    } catch (err) {
      next(err);
    }
  }

  exports.deleteImage = async (req, res, next) => {
    try {
      const { fileName, fileId } = req.body;
      const deleteData = await imagesHandler.deleteImage(fileName, fileId);
      console.log('deleteData controller >>>>>>>> ', deleteData);

      return res.status(200).send('deleted');

    } catch (err) {
      next(err);
    }
  }

  exports.updateMainImage = async (req, res, next) => {
    try {
      console.log('update main req body >>> ', req.body);
      const { url, fileName, fileId, spaceId } = req.body;
      const imgMain = { url, fileName, fileId };

      await Space.findOneAndUpdate({ _id: spaceId }, { imgMain });
      return res.status(200).send('updated main');

    } catch (err) {
      next(err);
    }
  }
  exports.updateTitleImage = async (req, res, next) => {
    try {
      const { url, fileName, fileId, spaceId } = req.body;
      const imgTitle = { url, fileName, fileId };

      await Space.findOneAndUpdate({ _id: spaceId }, { imgTitle });
      return res.status(200).send('updated title');

    } catch (err) {
      next(err);
    }
  }

  // exports.searchSpacesByName = async (req, res, next) => {
  //   try {
  //     console.log('backend params>>>> ', req.params);
  //     const { city = '', text = '' } = req.params;         
  //     const spaces = await Space.find({ city });

  //     const regex = new RegExp(text, 'gi');
  //     const results = spaces.filter(s => s.name.match(regex));
  //     console.log('results backend >>>>>>> ', results); 
  //     return res.status(200).send(results);
  //   } catch(err) {
  //     next(err);
  //   }
  // }



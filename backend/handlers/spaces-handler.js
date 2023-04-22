/* eslint-disable no-loop-func */
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const metro = require('../controllers/metro');
require('../models/User');
const User = mongoose.model('User');
require('../models/Space');
const constants = require('../constants');
const Space = mongoose.model('Space');
const ApiError = require('../exceptions/api-error');

cloudinary.config({
  secure: true
});

exports.getUserSpaces = async (email) => {

    if(!email) {
      console.log('1 --- no email handler')
      throw ApiError.UnauthorizedError();
    }

    const user = await User.findOne({ email });

    if(!user) {
      throw ApiError.UnauthorizedError();
    }

    let spaces = [];

    if (user.role !== 'admin') {
      spaces = await Space.find({ admin: user._id }).populate('adminDetails', 'email');
    } else {
      spaces = await Space.find().populate('adminDetails', 'email');
    }

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>
    
  //   await Space.updateMany({}, {$set: {
  //     'schedule.monday': {open: 1660546800000, close: 1660582800000},
  //     'schedule.tuesday': {open: 1660546800000, close: 1660582800000},
  //     'schedule.wednesday': {open: 1660546800000, close: 1660582800000},
  //     'schedule.thursday': {open: 1660546800000, close: 1660582800000},
  //     'schedule.friday': {open: 1660546800000, close: 1660582800000},
  //     'schedule.saturday': {open: 1660546800000, close: 1660582800000},
  //     'schedule.sunday': {open: 1660546800000, close: 1660582800000},
  // }
  // });

//   await Space.updateMany(
//     {},
//     {
//     '$set': {
//         'offers.$[].uid': Date.now()

//     }
// })


  //   const spacesList = await Space.find();
  //   const metroData = metro.metroData.find(city => city.id === '1');
  //  // console.log('metrodata >>>>> ', metroData);

  //   const stations = [];
  //   metroData.lines.forEach(l => {
  //     l.stations.forEach(s => {
  //       stations.push(s);
  //     })
  //   })

    // console.log('moscow stations >>>>>>>>>>>>>>> ', stations[0]);
    // console.log('moscow stations >>>>>>>>>>>>>>> ', stations.length);



    // eslint-disable-next-line no-plusplus
    // for (let i = 0; i < spacesList.length; i++) {

    
    //   if (spacesList[i].city === 'moscow') {

    //     console.log('>>>>>> ', spacesList[i]);

      //   const stationData = stations.find(s => spacesList[i].subway.name === s.name);

      //   console.log('original space name >>>>> ', spacesList[i].name, ' >>>  ', spacesList[i].subway.name);
      //   console.log('stationData >>>>>>>>>>>>>> ', stationData);
        
      //   if (stationData) {

  
      //     await Space.updateOne(
      //       { _id: spacesList[i]._id },
      //       { subwaySlug: stationData.slug }
      //     );
      //   } 
       
    //   }

    // }

 
    // console.log('spacesList >>>>> ', spacesList);

    // const spacesCheck = await Space.find();
    // spacesCheck.forEach(r => {
    //   console.log('>>>>>>>>>>>>>>>. ', r.offers)
    // })

    // return [];

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>

   return spaces;
   

  }

  exports.getFilteredUserSpaces = async (pending, text) => { 
    let spaces = [];

    if (pending !== 'null' && text === 'null') {
      console.log('1) search pending')
      spaces = await Space.find({ publishStatus: 'pending' }).populate('adminDetails', 'email');
    } 
    
    if (text !== 'null' && pending === 'null'){
      console.log('2) search name')
      spaces = await Space.find( { 'name': { '$regex': `${text}`, '$options': 'i' } }).populate('adminDetails', 'email');
    }

    if (text === 'null' && pending === 'null'){
      console.log('3) search all')
      spaces = await Space.find().populate('adminDetails', 'email');
    }

    return spaces;
  }

  exports.getFilteredUserSpacesByEmail = async (email) => { 
    let spaces = [];

    if (email) {
      const user = await User.findOne({ email });
      if (user) {
        spaces = await Space.find({ admin: user._id }).populate('adminDetails', 'email');
      } 
    } 
 
    return spaces;
  }

exports.getUserSpace = async (id) => {
    if(!id) {
      console.log('1 --- no id handler')
      throw ApiError.UnauthorizedError();
    }

    const space = await Space.findById(id);
    // CHECK IF BELONGS TO USER !!!!!

    if(!space) {
      throw ApiError.UnauthorizedError();
    }
 
    return space;
  }

  exports.saveUserSpace = async (data, userId, userRole) => {
    const { _id, ...rest } = data;
    const slug = data.slug ? data.slug : Date.now().toString();

    // IF NEW
    if (!data._id && !data.admin) {
      const newSpace = {
        ...rest,
        admin: userId,
        publishStatus: constants.COMPANY_PUBLISH_STATUS_PENDING,
        slug: userRole !== 'admin' ? Date.now().toString() : slug,
        tags: userRole !== 'admin' ? [] : data.tags,
      };
      const responseNew = await new Space(newSpace);
      await responseNew.save();

      return responseNew;

    // eslint-disable-next-line no-else-return
    } else {
      const spaceToUpdate = await Space.findOne({ _id: data._id });

      const updateSpaceBody = {
        ...rest,
        publishStatus: constants.COMPANY_PUBLISH_STATUS_PENDING,
        slug: userRole !== 'admin' ? spaceToUpdate.slug : slug,
        tags: userRole !== 'admin' ? spaceToUpdate.tags : data.tags,
      }

        const responseUpdate = await Space.findOneAndUpdate(
          { _id: data._id }, 
          updateSpaceBody, 
          { new: true}
          );
  
        return responseUpdate;
    }
    
  }


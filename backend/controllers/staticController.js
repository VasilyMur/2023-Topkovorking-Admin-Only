const mongoose = require('mongoose');
require('../models/Space');
const Space = mongoose.model('Space');
const constants = require('../constants');


  
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
  .sort({ created: 'desc' })
  .skip(skip)
  .limit(limit);
  

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
      slug: r.slug,
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

// STATIC >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

exports.getAllSpaces = async (req, res, next) => {
  try {
    const filterData = {
      publishStatus: constants.COMPANY_PUBLISH_STATUS_COMPLETE
    };

    const data = await Space.find(filterData);

    return res.status(200).send({ data });   
  } catch(err) {
    next(err);
  }
}
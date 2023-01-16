/* eslint-disable no-loop-func */
const mongoose = require('mongoose');
const axios = require('axios');
require('../models/User');
const User = mongoose.model('User');
require('../models/Space');
const constants = require('../constants');
const Space = mongoose.model('Space');
const ApiError = require('../exceptions/api-error');


  async function authBackBlaze() {
    try {   
      const token = `${process.env.B2_ID}:${process.env.B2_KEY}`;
      const keys = Buffer.from(token).toString('base64');
      const response = await axios.get(`https://api.backblazeb2.com/b2api/v2/b2_authorize_account`, { headers: {Authorization: `Basic ${keys}`} });
      
      const { authorizationToken, apiUrl } = response.data;
      return { authorizationToken, apiUrl };

      } catch (err) {
        console.log('bakcblaze auth err > ', err);
      }
  }

  exports.getUploadImageUrl = async () => {
    try {
      const { authorizationToken, apiUrl } = await authBackBlaze();

      const response = await axios.post(`${apiUrl}/b2api/v2/b2_get_upload_url`, { bucketId: process.env.B2_BUCKET_ID }, { headers: { Authorization: authorizationToken }});
      return response.data;
    } catch (err) {
      console.log(err)
    }
  }

  exports.deleteImage = async (fileName, fileId) => {
    try {
      const { authorizationToken, apiUrl } = await authBackBlaze();

      const response = await axios.post(`${apiUrl}/b2api/v2/b2_delete_file_version`, { fileName, fileId }, { headers: { Authorization: authorizationToken }});
      return response.data;
    } catch (err) {
      console.log(err)
    }
  }

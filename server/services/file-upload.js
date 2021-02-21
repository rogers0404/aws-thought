const aws = require('aws-sdk');
const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const config = require('../config/config');

aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    region: config.region
})
 
const app = express()
const s3 = new aws.S3();
 
const upload = multer({
  storage: multerS3({
    s3: s3,
    acl: 'public read',
    //bucket: 'thought-images',
    bucket: 'user-images-f2383802-bd24-4dcf-9cd3-2bc366d42294',
    metadata: (req, file, cb) => {
      cb(null, {fieldName: 'TESTING_META_DATA'});
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString())
    }
  })
})
 

module.exports = upload;
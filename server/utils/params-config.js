const { v4: uuidv4 } = require('uuid');

const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
    const imageParams = {
      Bucket: 'user-images-f2383802-bd24-4dcf-9cd3-2bc366d42294', //arn:aws:s3:::user-images-f2383802-bd24-4dcf-9cd3-2bc366d42294
      Key: `${uuidv4()}.${fileType}`,
      ACL: 'public-read',
      Body: fileName.buffer
    };
    return imageParams;
  };

module.exports = params;
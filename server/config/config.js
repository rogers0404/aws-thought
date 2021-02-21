// Config for local DynamoDB instance

module.exports = {
  region: 'us-east-2',
  aws_dynamodb_table: 'Thoughts',
  //endpoint: 'http://localhost:8080',
  accessKeyId:  process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY
};
require("dotenv").config(); // read .env
const AWS = require("aws-sdk");


AWS.config.update({
   
  region: process.env.REGION,
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});
// console.log(process.env.REGION, process.env.ACCESS_KEY_ID, process.env.SECRET_ACCESS_KEY);


const docClient = new AWS.DynamoDB.DocumentClient();

module.exports = {
    docClient
}
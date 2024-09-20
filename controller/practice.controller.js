
const {docClient} = require('../config/db');

exports.getUserFromStatus = (req,res) => {
 
    const tableName = "dev_FB_notification_audit_trail"; // Replace with your actual table name
  const indexName = "status-index";
  const statusValue = "SUCCESS";
   const startKey = null;
    const params = {
        TableName: tableName,
        IndexName: indexName,
        KeyConditionExpression: "#status = :status",
        ExpressionAttributeNames: {
          "#status": "status",
        },
        ExpressionAttributeValues: {
          ":status": statusValue,
        },
        ExclusiveStartKey: startKey
    };

try {
    docClient.query(params, (err, data) => {
    if (err) {
      console.error("Error querying DynamoDB:", err);
    } else {
      // Iterate through the items and delete them
      console.log(data.Items.length);
         res.status(200).send(data.Items); 
    }
    }
)
 } catch(err){
        console.log(err.message);
    }
}



// exports.deleteUserFromStatus = (req,res) => {
//     //  try {
//     //     User.destroy({}, {expected : {status : failed}} ,function (err, acc) {
//     //         console.log('User with status failed is deleted successfully');
//     //        console.log('Deleted user details', acc.get());
//     //     })
//     // }
//     // catch (error) {
//     //     console.log(error);  
//     //  }

// };e

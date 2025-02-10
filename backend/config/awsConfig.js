const AWS = require("aws-sdk")


AWS.config.update({
    accessKeyId:process.env.AWS_ACCESS_KEY_ID,
    seccretAcessKey:process.env.AWS_SECRET_ACCESS_KEY,
    region:"eu-north-1"

});
const s3 = new AWS.S3

module.exports = s3
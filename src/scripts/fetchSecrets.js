const AWS = require("aws-sdk");
const s3 = new AWS.S3();
const path = require('path');
const fs = require('fs');

// eslint-disable-next-line no-unexpected-multiline
(async () => {
    let my_file = await s3.getObject({
        Bucket: process.env.CYCLIC_BUCKET_NAME,
        Key: `${process.env.NODE_ENV}.json`,
    }).promise()
    await fs.writeFileSync(path.join(__dirname, '../config/', `${process.env.NODE_ENV}.json`), JSON.parse(my_file.Body.toString('utf-8')))
})();


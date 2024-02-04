
const config = require('../config');

const apmConfig =  {
    "serverUrl": config.APM_SERVER_URL,
    "serviceName": config.APM_SERVICE_NAME,
    "secretToken": config.APM_SECRET_TOKEN,
    "environment": config.APM_ENVIRONMENT,
    "verifyServerCert": config.APM_VERIFY_SERVER_CERT
  }
// Add this to the very top of the first file loaded in your app
var apm = require('elastic-apm-node').start(apmConfig)

module.exports = apm;

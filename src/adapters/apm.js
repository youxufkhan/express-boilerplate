
const config = require('../config');

const apmConfig = config.get('apm');
// Add this to the very top of the first file loaded in your app
var apm = require('elastic-apm-node').start(apmConfig)

module.exports = apm;

const pino = require('pino');
const { ecsFormat } = require('@elastic/ecs-pino-format');
const config = require('../config');
const logger = pino(ecsFormat({ convertReqRes: true , apmIntegration:config.APM_ENABLED})); 

module.exports = logger;    
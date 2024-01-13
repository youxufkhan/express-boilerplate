const pino = require('pino');
const { ecsFormat } = require('@elastic/ecs-pino-format');
const logger = pino(ecsFormat({ convertReqRes: true , apmIntegration:true})); 

module.exports = logger;    
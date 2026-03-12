'use strict';

/**
 * micro-learning service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::micro-learning.micro-learning');

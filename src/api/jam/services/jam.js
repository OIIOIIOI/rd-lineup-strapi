'use strict';

/**
 * jam service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::jam.jam');

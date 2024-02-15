'use strict';

/**
 * users-permission service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::users-permission.users-permission');

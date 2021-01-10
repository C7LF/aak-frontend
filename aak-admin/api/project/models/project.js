'use strict';

const slugifyTitle = require('../../../utils/slugify-title')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
            slugifyTitle(data)
        },
        beforeUpdate: async (params, data) => {
            slugifyTitle(data)
        },
    },
};

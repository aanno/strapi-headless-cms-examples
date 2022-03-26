'use strict';

/**
 *  post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const readingTime = require('reading-time');

module.exports = createCoreController('api::post.post', ({ strapi }) => ({
            async create(ctx) {
                // some logic here
                const { content } = ctx;
                if (content && content.length && content.length > 0) {
                    const ct = readingTime(content);
                    if (ct) {
                        data.readingTime = ct.text || undefined;
                    }
                }

                const response = await super.create(ctx);

                // some more logic

                return response;
            },
            async update(ctx) {
                // some logic here
                const { content } = ctx;
                if (content && content.length && content.length > 0) {
                    const ct = readingTime(content);
                    if (ct) {
                        data.readingTime = ct.text || undefined;
                    }
                }

                const response = await super.update(ctx);

                // some more logic

                return response;
            }
        }));

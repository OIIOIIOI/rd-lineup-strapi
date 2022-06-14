'use strict';

/**
 *  team controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::team.team', ({ strapi }) => ({
	async findOne(ctx) {
		const { data, meta } = await super.findOne(ctx)
		
		// Add team skaters
		data.attributes.skaters = await strapi.db.query('api::skater.skater').findMany({
			where: { team: data.id },
			populate: ['affinities', 'skater_role'],
		});
		
		return { data, meta }
	},
}));

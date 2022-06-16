'use strict';

/**
 *  game controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::game.game', ({ strapi }) =>  ({
	async delete(ctx)
	{
		const { id } = ctx.params
		
		await strapi.db.query('api::jam.jam').deleteMany({
			where: {
				game: {
					id: {
						$eq: id,
					},
				},
			},
		})
		
		return await super.delete(ctx)
		// const response = await super.delete(ctx)
		// return response
	},
}));

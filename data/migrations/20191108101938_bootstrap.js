exports.up = function(knex) {
	return knex.schema
		.createTable('projects', function(tbl) {
			tbl.increments();

			tbl.string('name', 255).notNullable();
			tbl.string('description', 556);
			tbl.string('completed', 64);
		})
		.createTable('tasks', (tbl) => {
			tbl.increments();

			tbl.string('description', 556).notNullable();
			tbl.string('notes', 255);
			tbl.string('completed', 64);
			tbl
				.integer('project_id')
				.unsigned()
				.references('id')
				.inTable('projects')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');
		})
		.createTable('resources', (tbl) => {
			tbl.increments();

			tbl.string('name', 255).notNullable();
			tbl.string('description', 556);

			tbl
				.integer('project_id')
				.unsigned()
				.references('id')
				.inTable('projects')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');
		});
};

exports.down = function(knex) {};

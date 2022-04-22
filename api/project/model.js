// build your `Project` model here
exports.up = async function (knex) {
    await knex.schema
    .createTable('projects', table => {
        table.increments('project_id')
        table.string('project_name').notNullable()
        table.string('project_description')
        table.integer('project_completed')
    .createTable('resources', table => {
        table.increments('resource_id')
        table.string('resource_name').notNullable().unique()
        table.string('resource_description')
    })
    .createTable('tasks', table => {
        table.increments('task_id')
        table.string('task_description').notNullable()
        table.string('task_notes')
        table.integer('task_completed')
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
    .createTable('project_resource', table => {
        table.increments('project_resource_id')
        table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
        table.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })


    })

  };
  
  exports.down = async function (knex) {

  };
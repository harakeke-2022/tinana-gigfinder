exports.up = function (knex) {
    return knex.schema.createTable('bands', (table) => {
      table.increments('id').primary()
      table.string('image')
      table.string('description')
      table.string('genre')
      table.string('name')
      table.boolean('featured')
    })
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTable('bands')
  }
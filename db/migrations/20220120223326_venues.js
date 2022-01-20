exports.up = function (knex) {
    return knex.schema.createTable('venues', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('location')
      table.string('city')
    })
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTable('events')
  }

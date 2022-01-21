exports.up = function (knex) {
    return knex.schema.createTable('events', (table) => {
      table.increments('id').primary()
      table.integer('venue_id').references('venues.id')
      table.string('day')
      table.string('time')
      table.string('name')
      table.string('date')
      table.string('description')
      table.integer('band_id').references('bands.id')
      table.boolean('featured')
    })
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTable('events')
  }

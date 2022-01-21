const config = require('./knexfile').development
const database = require('knex')(config)

function getAll(db = database) {
  return db('events')
    .select()
}

// Select events by city and day
function selectByCityAndDay(city, day, db = database){
      return db('events')
        .join('venues','venues.id','events.venue_id')
        .where({
          day: day,
          city: city
        })
        .select(
          'venues.id as venuesId',
          'venues.name as venueName',
          'events.name as eventName',
          'day',
          'time',
          'description'
        )

}

module.exports = {
  getAll,
  selectByCityAndDay
}


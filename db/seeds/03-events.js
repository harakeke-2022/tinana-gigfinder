
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, venue_id: 1, name: '1991 Tour in New Zealand', day: 'Friday', description: 'excellents event much wows', band_id: 1, time: "8:00pm",  featured: true }
      ]);
    });
};

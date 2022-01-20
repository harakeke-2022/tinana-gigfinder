
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('venues').del()
    .then(function () {
      // Inserts seed entries
      return knex('venues').insert([
        {id: 1, name: 'Pointers', location: '2 Lower Hobson Street, Auckland CBD', city: 'Auckland'}
      ]);
    });
};

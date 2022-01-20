
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bands').del()
    .then(function () {
      // Inserts seed entries
      return knex('bands').insert([
        {id: 1, name: '1991', genre: 'Drum N Bass', description: '1991 has emerged as one of the most exciting artists in Dance music. Since winning the Best Newcomer award at the 2017 Drum & Bass Awards, he has held down a steady release schedule of hits, collaborating with the likes of Sub Focus & Netsky and remixing Chase & Status, Chris Lake, Basement Jaxx and Camo & Krooked, all while balancing a hectic touring schedule which has him travelling across the globe.', image: 'https://cdn.eventfinda.co.nz/uploads/events/transformed/1667327-724254-35.png', featured: true }
      ]);
    });
};

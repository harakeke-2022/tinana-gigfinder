
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bands').del()
    .then(function () {
      // Inserts seed entries
      return knex('bands').insert([
        {id: 1, name: 'rowValue1', genre: 'rock', description: 'good band', image: 'coolpic.jpg', featured: true },
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};

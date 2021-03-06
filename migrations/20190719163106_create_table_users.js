
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
      table.increments('id').primary()
      table.string('name').notNull()
      table.string('email').notNull().unique()
      table.string('password').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dorpTable('users')
};


// comando para rodar as migrations sem start na aplicação : knex migrate:latest
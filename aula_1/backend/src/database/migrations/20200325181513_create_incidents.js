
exports.up = function(knex) {
    return knex.schema.createTable('incidents ', function(table){
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};

/*
npx knex migrate:latest - executa e cira as entidades e tables no db
npx knex migrate:rollback - desfaz a última ação

npx knex - lista os comandos o terminal
*/

const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/dbConfig');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', error);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todos = require('./todo.js')(sequelize, DataTypes);
db.users = require('./user.js')(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then(() => {
    return db.users.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return db.users.create({ name: 'Egie', email: 'test@gmail.com' });
    }
    return user;
  })
  .then(() => {
    console.log('yes re-sync done!');
  })
  .catch((err) => {
    console.log(`Error:${err}`);
  });

// db.users.hasMany(db.todos);

// db.todos.belongsTo(db.users);

module.exports = db;

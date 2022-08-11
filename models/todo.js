module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('todo', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: DataTypes.BOOLEAN,
  });

  return Todo;
};

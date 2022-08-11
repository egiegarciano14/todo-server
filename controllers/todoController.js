const db = require('../models');

const Todos = db.todos;

const addTodo = async (req, res) => {
  const todoItem = {
    title: req.body.title,
    completed: req.body.completed,
  };

  const todo = await Todos.create(todoItem);
  res.status(200).send(todo);
  // console.log(todo);
};

const getAllTodo = async (req, res) => {
  const todos = await Todos.findAll();
  res.status(200).send(todos);
};

const deleteTodo = async (req, res) => {
  const id = req.params.id;

  const deletedTodo = await Todos.destroy({ where: { id: id } });

  res.status(200).send(`Product id: ${deletedTodo} is deleted!`);
};

const updateStatusTodo = async (req, res) => {
  const id = req.params.id;
  const status = req.params.status;

  await Todos.update({ completed: status }, { where: { id: id } });

  res.status(200).send(`Product id: ${id} is updated!`);
};

module.exports = {
  addTodo,
  getAllTodo,
  deleteTodo,
  updateStatusTodo,
};

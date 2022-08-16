const db = require('../models');

const Todos = db.todos;

const addTodo = async (req, res) => {
  const todoItem = {
    title: req.body.title,
  };

  const todo = await Todos.create(todoItem);
  return res.status(200).send(todo);
};

const getAllTodo = async (req, res) => {
  const todos = await Todos.findAll();
  return res.status(200).send(todos);
};

const deleteTodo = async (req, res) => {
  const id = req.params.id;

  await Todos.destroy({ where: { id: id } });

  return res.status(200).send(`Todo id: ${id} is deleted!`);
};

const updateStatusTodo = async (req, res) => {
  const id = req.params.id;
  const status = req.body.completed;

  await Todos.update({ completed: status }, { where: { id: id } });

  return res.status(200).send(`Todo id: ${id} is updated!`);
};

// Todo: make fetchAllCompleted to filter only the todo item when staus is completed

module.exports = {
  addTodo,
  getAllTodo,
  deleteTodo,
  updateStatusTodo,
};

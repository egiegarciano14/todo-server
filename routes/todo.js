const router = require('express').Router();
const todoController = require('../controllers/todoController');

// todo routers
router.post('/addTodo', todoController.addTodo);
router.get('/getAllTodo', todoController.getAllTodo);
router.delete('/deleteTodo/:id', todoController.deleteTodo);
router.put('/updateTodo/:id', todoController.updateStatusTodo);

module.exports = router;

const express = require('express');
const cors = require('cors');
const routerTodo = require('./routes/todo');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use('/api/todos', routerTodo);

const PORT = process.env.PORT || 8080;

//server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

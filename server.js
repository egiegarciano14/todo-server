const express = require('express');
const cors = require('cors');
const routerTodo = require('./routes/todo');

const app = express();
// const corsOption = {
//   origin: ['http://localhost:3000'],
// };

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routers
app.use('/api/todos', routerTodo);

const PORT = process.env.PORT || 8080;

//server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

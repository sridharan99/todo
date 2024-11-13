const Todo = require('../models/todomodel');

exports.addTodo = async (req, res) => {
  const todo = new Todo({ ...req.body, userId: req.user.id });
  await todo.save();
  res.send(todo);
};

exports.getTodos = async (req, res) => {
  const todos = await Todo.find({ userId: req.user.id });
  res.send(todos);
};

// Similar implementations for updateTodo, deleteTodo

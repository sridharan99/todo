import React, { useState, useEffect } from 'react';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../services/todoservice';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await getTodos();
    setTodos(response.data);
  };

  const handleAdd = async () => {
    await addTodo({ text: newTodo, status: 'pending' });
    fetchTodos();
  };

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <span>{todo.text}</span>
          <span>{todo.status}</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          {/* Additional buttons to update status */}
        </div>
      ))}
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

export default TodoList;


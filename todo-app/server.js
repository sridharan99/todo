const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authroutes');
const todoRoutes = require('./routes/todoroutes');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

mongoose.connect('mongodb://localhost:27017/tododb', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(5000, () => console.log('Server running on http://localhost:5000'));

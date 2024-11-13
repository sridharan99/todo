const jwt = require('jsonwebtoken');
const User = require('../models/usermodel');

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  // Store user in database
  const user = new User({ name, email, password });
  await user.save();
  res.send({ message: 'User created' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.password !== password) return res.status(400).send({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, 'secret_key');
  res.send({ token });
};
const { signup, login } = require('../src/services/todoservice');

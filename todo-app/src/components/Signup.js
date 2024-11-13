import React, { useState } from 'react';
import { signup } from '../services/authservice';

const Signup = () => {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(userData);
    // Redirect to login or homepage
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
      <input type="email" placeholder="Email" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;

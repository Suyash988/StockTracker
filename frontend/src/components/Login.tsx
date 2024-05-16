import React, { useState } from 'react';
import authService from '../services/authService';
import { Button, Link } from '@mui/material';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authService.login(email, password);
      alert('User logged in successfully');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col items-center justify-center min-h-screen">
    <div className="mb-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-500">Login to your account</h1>
      <p className='text-center'>Welcome back! , Please enter your details.</p>
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>
  <Button type='submit' variant='outlined' className='shadow-xl '>Login</Button>
  <p className="text-small-regular text-dark-1 text-center mt-4">Don't have an account yet?
  <Link href="/register" className="text-primary-500 text-small-semibold ml-1">Create an Account</Link></p>
  </form>
  );
};

export default Login;
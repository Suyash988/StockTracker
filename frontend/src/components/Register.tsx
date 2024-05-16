import React, { useState } from 'react';
import authService from '../services/authService';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const Register: React.FC = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authService.register(email, password);
      alert('User registered successfully');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col items-center justify-center min-h-screen">
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-600">Create a new account</h1>
        
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
      <Button type="submit" variant="outlined" className='shadow-xl'>Signup</Button>
      <p className="text-small-regular text-dark-1 text-center mt-4">
            Already have an account?
            <Link
              href="/login"
              className="text-primary-500 text-small-semibold ml-1">
              Log in
            </Link>
          </p>
    </form>
  );
};

export default Register;
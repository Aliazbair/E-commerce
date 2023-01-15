import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../components/Input';
import axios from '../api/axios';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/login', { email, password });
      setEmail('');
      setPassword('');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='max-w-7xl mx-auto px-10 py-10'>
      <h2 className='text-center font-bold text-2xl pb-5'>Login Page</h2>

      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center justify-center
      space-y-3'
      >
        {/* email */}
        <div>
          <label
            htmlFor='Email'
            className='block text-gray-600 font-mono font-bold'
          >
            Email
          </label>
          <Input
            type='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* password */}
        <div>
          <label
            className='block text-gray-600 font-mono font-bold'
            htmlFor='Password'
          >
            Password
          </label>
          <Input
            type='password'
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* button */}
        <div>
          <button
            type='submit'
            className='bg-indigo-800 py-2 px-3 text-white rounded '
          >
            Login
          </button>
        </div>

        <div className='mb-5'>
          <p className='text-sm text-gray-500'>
            not have account yet
            <Link className='ml-3 text-indigo-400 font-bold' to='/register'>
              Sing Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

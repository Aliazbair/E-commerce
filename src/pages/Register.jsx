import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../components/Input'

export default function Register() {
  return (
    <div className='max-w-7xl mx-auto px-10 py-10'>
      <h2 className='text-center font-bold text-2xl pb-5'>Login Page</h2>

      <form
        className='flex flex-col items-center justify-center
      space-y-3'
      >
        {/* username */}
        <div>
          <label
            htmlFor='userName'
            className='block text-gray-600 font-mono font-bold'
          >
            userName
          </label>
          <Input type='text' />
        </div>
        {/* email */}
        <div>
          <label
            htmlFor='Email'
            className='block text-gray-600 font-mono font-bold'
          >
            Email
          </label>
          <Input type='email' />
        </div>

        {/* password */}
        <div>
          <label
            className='block text-gray-600 font-mono font-bold'
            htmlFor='Password'
          >
            Password
          </label>
          <Input type='password' />
        </div>

        {/* button */}
        <div>
          <button
            type='submit'
            className='bg-indigo-800 py-2 px-3 text-white rounded '
          >
            Sing Up
          </button>
        </div>

        <div className='mb-5'>
          <p className='text-sm text-gray-500'>
            have account
            
              <Link className='ml-3 text-indigo-800 font-light' to='/login'>
                Sing In
              </Link>
        
          </p>
        </div>
      </form>
    </div>
  );
}

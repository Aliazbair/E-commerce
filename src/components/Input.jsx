import React from 'react';

export const Input = ({ type, name, handleChange, value, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      className='shadow border text-gray-700 rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 focus:ring outline-none'
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

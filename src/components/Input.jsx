import React from 'react'

export const Input = ({type,name,handleChange,value}) => {
  return (
    <input
      type={type}
      name={name}
      className='outline-none bg-slate-400/10 rounded-sm border-b py-4 px-6 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40'
      value={value}
      onChange={handleChange}
    />
  );
}

import React from 'react';

export const LosesCard = ({
  item: {
    lose_name,
    id,
    personal_name,
    description,
    phone_of_loses,
    date_of_lose,
    location,
  },
}) => {
  return (
    <div
      key={id}
      className='bg-gray-700  rounded px-4 py-2 shadow shadow-slate-400'
    >
      <h1 className='text-yellow-600 font-bold text-center text-xl mb-3'>
        {lose_name}
      </h1>
      <h3 className='text-gray-300 font-AmiriItalic text-lg'>
        الاسم : {personal_name}
      </h3>
      <h4 className='text-gray-300 font-AmiriItalic text-lg'>
        {' '}
        الوصف : {description}
      </h4>
      <strong className='text-gray-300 font-AmiriItalic text-lg'>
        رقم الهاتف : {phone_of_loses}
      </strong>
      <h6 className='text-gray-300 font-AmiriItalic text-lg'>
        تاريخ الفقد : {date_of_lose}
      </h6>
      <h6 className='text-gray-300 font-AmiriItalic text-lg'>
        {' '}
        مكان الاقامة : {location}
      </h6>
    </div>
  );
};

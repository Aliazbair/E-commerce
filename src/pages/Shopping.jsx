import React, { useState } from 'react';
import { Input } from '../components/Input';
import { useNavigate } from 'react-router-dom';
import Text from '../components/Text';
// const info = JSON.parse(localStorage.getItem('shoppingInfo'));
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../redux/cardReducer';
const Shopping = () => {
  const { shippingAddress } = useSelector((state) => state.card);
  const [address, setAddress] = useState(shippingAddress.address || '');
  const [country, setCountry] = useState(shippingAddress.country || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ''
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const shoppingInfo = { address, country, city, postalCode };

    dispatch(saveShippingAddress(shoppingInfo));
    // localStorage.setItem('shoppingInfo', JSON.stringify(shoppingInfo));
    navigate('/order');
  };

  return (
    <div className='wrap py-20 bg-slate-800 w-screen h-screen'>
      {/* text */}
      <Text>Shopping Card</Text>

      <form className='my-10' onSubmit={handleSubmit}>
        {/* address */}
        <div>
          <label
            htmlFor='Address'
            className='block text-gray-600 font-mono font-bold'
          >
            Address
          </label>
          <Input
            type='text'
            value={address}
            placeholder='Enter your Address'
            handleChange={(e) => setAddress(e.target.value)}
          />
        </div>
        {/* Country */}
        <div>
          <label
            htmlFor='Country'
            className='block text-gray-600 font-mono font-bold'
          >
            Country
          </label>
          <Input
            type='text'
            value={country}
            placeholder='Enter your Country'
            handleChange={(e) => setCountry(e.target.value)}
          />
        </div>
        {/* City */}
        <div>
          <label
            htmlFor='City'
            className='block text-gray-600 font-mono font-bold'
          >
            City
          </label>
          <Input
            type='text'
            value={city}
            placeholder='Enter your City'
            handleChange={(e) => setCity(e.target.value)}
          />
        </div>
        {/* postalCode */}
        <div>
          <label
            htmlFor='postalCode'
            className='block text-gray-600 font-mono font-bold'
          >
            postalCode
          </label>
          <Input
            type='text'
            value={postalCode}
            placeholder='Enter your postalCode'
            handleChange={(e) => setPostalCode(e.target.value)}
          />
        </div>

        <div className='my-5'>
          <button
            type='submit'
            className='bg-yellow-600 py-2 px-3 text-white rounded w-full hover:opacity-50 transition-all duration-300'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Shopping;

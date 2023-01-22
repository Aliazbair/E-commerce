import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeCard, resetCart } from '../redux/cardReducer';

export const Cart = () => {
  const { products } = useSelector((state) => state.card);
  const dispatch = useDispatch();

  const total = () => {
    let total = 0;
    products.forEach((product) => (total += product.quantity * product.price));
    return total.toFixed(2);
  };
  console.log(products);
  return (
    <div className='flex flex-col  justify-center gap-5 '>
      {products.map(({ id, title, description, image, quantity, price }) => (
        <div
          key={id}
          className='flex items-center justify-center space-x-2 shadow-sm shadow-emerald-400 py-4 px-2 '
        >
          <img src={image} className='w-10' alt='' />
          <div>
            <h1 className='text-xl font-bold font-mono'>{title}</h1>
            <p className='text-sm text-slate-500'> {description}</p>
            <div>
              {quantity} x ${price}
            </div>
          </div>

          <button
            onClick={() => dispatch(removeCard(id))}
            className='block w-full bg-yellow-700 text-white px-2 py-1 rounded-sm mt-5 '
          >
            remove item
          </button>
        </div>
      ))}

      <p>{total()}</p>
      <button onClick={() => dispatch(resetCart())}>Reset Cart</button>
      <button className='bg-yellow-600 px-1 py-2 w-full rounded-md text-gray-300 block hover:opacity-70 transition-all duration-300'>
        check out
      </button>
    </div>
  );
};

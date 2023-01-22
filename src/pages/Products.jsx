import { GET_PRODUCTS } from '../graphql/query/products';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cardReducer';
import { useState } from 'react';
export const Products = () => {
  const [quantity, setQuantity] = useState(1);
  const products = useSelector((state) => state.card.products);

  const dispatch = useDispatch();

  // console.log(products);
  const { data, error, loading } = useQuery(GET_PRODUCTS);
  if (loading) return 'loading';
  // console.log(data);
  return (
    <div className=''>
      <h2>Products page</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 p-3 '>
        {data.products.map(
          ({ title, category, id, count, rate, description, price, image }) => (
            <div key={id} className='shadow shadow-gray-500'>
              <img
                src={image}
                alt=''
                className='w-full h-52 object-cover rounded'
              />
              <div className='p-3'>
                <div className=''>
                  <h2 className='text-lg md:text-xl font-semibold'>
                    {title.slice(0, 20)}
                  </h2>
                </div>
                <p className='truncate text-sm text-slate-300'>{description}</p>
                <div className='flex items-center justify-between py-3'>
                  <h4 className='text-red-400 font-bold'>{rate}</h4>
                  <h5 className='text-sm font-bold text-orange-500'>{count}</h5>
                </div>
                <p>
                  <strong>${price}</strong>
                </p>

                {/* <div className='flex space-x-1'>
                  <button
                    className='bg-gray-400 w-10 text-slate-100 rounded-sm'
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    +
                  </button>
                  {quantity}
                  <button
                    className='bg-gray-400 w-10 text-slate-100 rounded-sm'
                    onClick={() =>
                      setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                    }
                  >
                    -
                  </button>
                </div> */}

                <div className=''>
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id,
                          title,
                          description,
                          image,
                          price,
                          quantity,
                        })
                      )
                    }
                    className='block w-full bg-yellow-700 text-white px-2 py-1 rounded-sm mt-5 '
                  >
                    add to card
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

import { GET_PRODUCTS } from '../graphql/query/products';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cardReducer';
import { useState } from 'react';
export const Products = () => {
  const [quantity, setQuantity] = useState(1);
  const products = useSelector((state) => state.card.products);

  const dispatch = useDispatch();

  console.log(products);
  const { data, error, loading } = useQuery(GET_PRODUCTS);
  if (loading) return 'loading';
  // console.log(data);
  return (
    <div className=''>
      <h2>Products page</h2>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 p-3'>
        {data.products.map(
          ({ title, category, id, count, rate, description, price, image }) => (
            <div key={id} className='shadow shadow-gray-500 '>
              <img
                src={image}
                alt=''
                className='w-[100%] h-52 object-cover rounded'
              />
              <div className='p-3'>
                <div className='flex items-center justify-between'>
                  <h2 className='text-xl font-semibold'>{title}</h2>
                  <small className='text-sm bg-red-700 px-s1  rounded'>
                    {category}
                  </small>
                </div>
                <p className='truncate'>{description}</p>
                <div className='flex items-center justify-between py-3'>
                  <h4>{rate}</h4>
                  <h5>{count}</h5>
                </div>
                <p>
                  <strong>${price}</strong>
                </p>

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
                  className='bg-yellow-700 text-white px-2 py-1 rounded-sm mt-5'
                >
                  add to card
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

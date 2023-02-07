import { useSelector } from 'react-redux';
function Order() {
  const { shippingAddress, products } = useSelector((state) => state.card);
  return (
    <div className='wrap py-20 bg-slate-800 w-screen h-screen'>
      {products.map((product) => (
        <div className='grid gap-4 md:grid-cols-2  p-3'>
          {/* products info */}
          <div>
            <img src={product.image} className='w-20 rounded' alt='' />
            <h2 className='text-2xl text-gray-400'>{product.title}</h2>
            <div className='text-white flex space-x-3'>
              <p>Qty: {product.quantity}</p>
              <p>price: {product.price}</p>
            </div>
          </div>

          {/* shopping address */}
          <div>
            <h2 className=' text-red-900'>{shippingAddress.address}</h2>
            <h2 className=' text-red-900'>{shippingAddress.country}</h2>
            <h2 className=' text-red-900'>{shippingAddress.city}</h2>
            <h2 className=' text-red-900'>{shippingAddress.postalCode}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Order;

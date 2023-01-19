import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const products = useSelector((state) => state.card.products);
  return (
    <nav className='flex justify-between items-center px-10 bg-indigo-600 text-gray-300 py-2'>
      <div>
        <h3>Ali Auth</h3>
      </div>
      <ul className='flex items-center space-x-4'>
        <Link to='/'  className='hover:text-gray-200'>Home</Link>
        <Link to='/jokes' className='hover:text-gray-200'>Jokes</Link>
        <Link to='/products' className='hover:text-gray-200'>Products</Link>
        <Link to='/login' className='hover:text-gray-200'>Login</Link>
        <Link to='/register' className='hover:text-gray-200'>Register</Link>
        <Link to='/card' className='hover:text-gray-200'>
          <div className='relative'>
          <img className='w-10' src="/green-shopping-cart-10909.svg" alt="" />
          <span className='absolute top-1 right-0 font-bold bg-red-600 animate-pulse rounded-full px-2 py-0.5  text-sm grid place-items-center'>{products.length}</span>

          </div>
        </Link>
      </ul>
    </nav>
  );
}

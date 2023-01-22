import { GET_PRODUCTS } from '../graphql/query/products';
import { useQuery } from '@apollo/client';
import { ProductsList } from '../components/ProductsList';
export default function Home() {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  if (loading) return 'loading..........';
  if (error) return 'error';

  return (
    <div className='py-12'>
      {/* header */}
      <header className='bg-gradient-to-br from-indigo-500 to-orange-600  px-4 py-10'>
        <h1 className='text-4xl font-mono font-semibold text-indigo-100'>
          Welcome You in My Store
        </h1>
        <p className='text-slate-200'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
          accusantium sed vitae fugiat quos maxime voluptate facilis, dolor
          sint, inventore et nulla culpa quibusdam quaerat aperiam autem, nobis
          minus earum.
        </p>
        <img src='' alt='' />
      </header>

      {/* hero */}

      <div className=''>
        <img
          src='https://images.pexels.com/photos/4633292/pexels-photo-4633292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          className='w-screen h-screen object-cover shadow-xl shadow-gray-400 hover:bg-opacity-[0.2]'
        />
      </div>

      {/* some category */}
      <div className='py-5'>
        <h2 className='text-5xl text-center text-yellow-400 '>Category</h2>

        <div className='flex gap-3 overflow-x-scroll scrollbar-hide my-4 snap-x snap-mandatory snap-center px-2 '>
          <img
            src='https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='w-20  hover:scale-75 rounded-sm  duration-300 transition-all'
          />
          <img
            src='https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='w-20  hover:scale-75 rounded-sm  duration-300 transition-all'
          />
          <img
            src='https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='w-20  hover:scale-75 rounded-sm  duration-300 transition-all'
          />
          <img
            src='https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='w-20  hover:scale-75 rounded-sm  duration-300 transition-all'
          />
          <img
            src='https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='w-20  hover:scale-75 rounded-sm  duration-300 transition-all'
          />
          <img
            src='https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='w-20  hover:scale-75 rounded-sm  duration-300 transition-all'
          />
          <img
            src='https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='w-20  hover:scale-75 rounded-sm  duration-300 transition-all'
          />
          <img
            src='https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='w-20  hover:scale-75 rounded-sm  duration-300 transition-all'
          />
          <img
            src='https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='w-20  hover:scale-75 rounded-sm  duration-300 transition-all'
          />
          <img
            src='https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='w-20  hover:scale-75 rounded-sm  duration-300 transition-all'
          />
          <img
            src='https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='w-20  hover:scale-75 rounded-sm  duration-300 transition-all'
          />
          <img
            src='https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='w-20  hover:scale-75 rounded-sm  duration-300 transition-all'
          />
          <img
            src='https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='w-20 hover:scale-75 rounded-sm  duration-300 transition-all '
          />
        </div>
      </div>

      {/* some products  */}
      <div className='py-10'>
        <h1 className='text-4xl text-center font-mono font-semibold text-indigo-400 uppercase border-b my-3'>
          most popular
        </h1>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 p-3 '>
          {data.products.slice(0, 8).map((data) => (
            <ProductsList key={data.id} {...data} />
          ))}
        </div>
      </div>

      <div>
        <h2 className='text-gray-600 text-4xl py-10 text-center'>
          save your money
        </h2>
        <div className='grid gap-4  md:grid-cols-2 items-center bg-gradient-to-tr from-yellow-600 to-red-400 rounded-sm  py-4 px-3'>
          <p className='text-slate-100 text-xl'>
            Save a lot of your money with our online store, as we offer a lot of
            discounts on a wide range of products. From electronics to fashion,
            home decor to outdoor gear, you'll find amazing deals on everything
            you need. Our discounts are updated regularly, so you can always
            find the best deals on the latest products. Whether you're shopping
            for yourself or looking for a gift, our online store has something
            for everyone. Don't miss out on these incredible savings - shop now
            and start saving today!
          </p>
          <img
            src='undraw_savings_re_eq4w.svg'
            className='ali bg-gradient-to-tr  from-indigo-800 to-green-400 '
            alt=''
          />
        </div>
      </div>

      {/* some products  */}
      <div className='py-10'>
        <h1 className='text-4xl text-center font-mono font-semibold text-indigo-400 uppercase border-b my-3'>
          last products
        </h1>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 p-3 '>
          {data.products.slice(3, 8).map((data) => (
            <ProductsList key={data.id} {...data} />
          ))}
        </div>
      </div>

      {/* payment method */}
      <div>
        <h2 className='bg-clip-text text-transparent bg-gradient-to-br from-red-700 to-slate-600 font-bold text-center text-5xl py-5'>
          payment method
        </h2>
        <div className='grid gap-3 md:grid-cols-2 px-5 items-center bg-gradient-to-br from-gray-100 to-blue-900'>
          <p className='bg-clip-text text-transparent bg-gradient-to-br from-gray-700 to-slate-900 font-mono'>
            In our store, we provide you with multiple payment methods to ensure
            a seamless and convenient shopping experience for our customers.
            Whether you prefer to use a credit card, debit card, or online
            payment platforms such as PayPal or Apple Pay, we've got you
            covered. Our secure payment gateway ensures that your personal and
            financial information is protected at all times. With our wide range
            of payment options, you can shop with confidence knowing that you
            have the freedom to choose the method that works best for you. So
            come and explore our store today and experience the convenience of
            our multiple payment options.
          </p>
          <div className='flex items-center flex-wrap ali bg-indigo-700 p-20'>
            <img
              src='undraw_stripe_payments_re_chlm.svg'
              className='w-40'
              alt=''
            />
            <img src='undraw_wallet_re_cx9u.svg' alt='' className='w-20' />
            <img
              src='undraw_online_payments_re_y8f2.svg'
              alt=''
              className='w-40'
            />
          </div>
        </div>
      </div>

      {/* footer */}
    </div>
  );
}

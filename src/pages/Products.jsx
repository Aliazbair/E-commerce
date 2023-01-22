import { GET_PRODUCTS } from '../graphql/query/products';
import { useQuery } from '@apollo/client';

import { addToCart } from '../redux/cardReducer';
import { ProductsList } from '../components/ProductsList';
export const Products = () => {
  // const [quantity, setQuantity] = useState(1);
  // const products = useSelector((state) => state.card.products);

  // const dispatch = useDispatch();

  // console.log(products);
  const { data, error, loading } = useQuery(GET_PRODUCTS);
  if (loading) return 'loading';
  // console.log(data);
  return (
    <div className=''>
      <h2>Products page</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 p-3 '>
        {data.products.map((data) => (
          <ProductsList key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

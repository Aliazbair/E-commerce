import { GET_JOKES } from '../graphql/query/joke';
import { useQuery } from '@apollo/client';
export const Jokes = () => {
  const { data, error, loading } = useQuery(GET_JOKES);
  if (loading) return 'loading....';
  console.log(data.jokes[0].type);
  return (
    <div className='max-w-7xl mx-auto px-10'>
      <div>
        <h1 className='text-3xl text-center text-gray-300'>Jokes Page</h1>
        <div className='grid gap-3 md:grid-cols-2  '>
          {data &&
            data?.jokes?.map(({ joke, id, type }) => (
              <div
                key={id}
                className='border bg-gray-600 rounded-md my-4 p-2 text-right shadow shadow-red-300'
              >
                <h2 className='font-mono text-xl'>🤣😂{joke} </h2>
                <small className='font-bold text-green-500 text-sm'>
                  {type}
                </small>

                {/* reaction icon  */}
                <div className='cursor-pointer hover:opacity-10 mt-2'>😁 😍 😅 😂</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

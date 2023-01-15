import React from 'react'
import { LosesCard } from '../components/LosesCard'
import { useQuery } from '@apollo/client';

import { GET_LOSES } from '../graphql/query/loses';
export const Loses = () => {
      const { loading, error, data } = useQuery(GET_LOSES);

      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      // console.log(data);
      const { data: loses } = data.loses;

      console.log(loses);
  return (
    <div className=''>
      <div className='grid gap-4 md:grid-cols-3 xl:grid-cols-4'>
        {loses.map((item) => (
           <LosesCard item={item} />
        ))}
      </div>
    </div>
  );
}

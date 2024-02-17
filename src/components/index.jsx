import React from 'react';
import Links from './links';
import Profile from './profile';

import SWR from '../api/swr';

const Index = () => {

  const discord = SWR();
  const discordUser = discord.data ? discord.data : null;


  return (
    <div className='mt-12'>
      {!discordUser && 'Loading...'}
      {discordUser && console.log(discordUser)}
      {discordUser &&

      <div className='flex flex-col'>
      <div className='container mx-auto flex justify-between mb-80'>
        <Profile key={1} discord={discordUser} />
        <Links 
          key={2} 
          discord={discordUser}
        />
      </div>
      <div className='bg-gray-100 py-5'>
        <div className='container mx-auto flex justify-between font-satoshiBold text-grayColor'>
          <p>Developed by @vezironi</p>
          <p>Click Me!</p>
        </div>
      </div>
    </div>}
    </div>
  )
}

export default Index
import React from 'react';
import Links from './links';
import Profile from './profile';

import SWR from '../api/swr';

const Index = () => {

  const discord = SWR('discord');
  const discordUser = discord.data ? discord.data : null;


  return (
    <div className='mt-12'>
      {!discordUser && 'Loading...'}
      {discordUser &&
      <div className='flex flex-col'>
        <div className='container mx-auto flex justify-between responsive-flex-col'>
          <Profile key={1} discord={discordUser} />
          <Links 
            key={2} 
            discord={discordUser}
          />
        </div>
      </div>
      }
    </div>
  )
}

export default Index
import React from 'react'

import Lınks from './links';
import Profile from './profile';

const Index = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-between'>
        <Profile />
        <Lınks />
      </div>
      <div className='flex justify-between text-azurWhite'>
        <p>Developed by @vezironi</p>
        <p>Click Me!</p>
      </div>
    </div>
  )
}

export default Index
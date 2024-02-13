import React from 'react'
import socialMedia from './../api/social-media.json'

const Lınks = () => {

  return (
    <div className='w-1/2'>
      <div>
        <p className='font'>Social Media</p>
        <div className='grid grid-cols-4 gap-1 mt-10'>
          {socialMedia.map((x) => (
            <a href={x.url} className='p-3 rounded-md bg-azurWhite border border-primaryPurple text-alisBlue h-44 w-44 flex flex-col justify-between'>
              <div>
                <img src={x.logo} alt={x.label} width={32} height={32} className='rounded-md mb-2' />
                <p className='font-medium text-black'>{x.label}</p>
                <p className='text-sm text-gray-600'>{x.description}</p>
              </div>
              <div>
                <p className={`bg-[${x.followColor}] text-white font-medium text-sm w-max px-3 py-1 rounded-md transition hover:bg-[${x.hoverFollowColor}]`}>Follow</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Lınks
import React from 'react'

const Profile = (discord) => {

  const gif = discord.discord.data.discord_user.avatar.startsWith('a_')

  return (
    
    <div className='w-1/2'>
      <div>
        <div>
          <img src={`https://cdn.discordapp.com/avatars/${discord.discord.data.discord_user.id}/${discord.discord.data.discord_user.avatar}.${gif ? 'gif' : 'webp'}`} alt='vezir' className='rounded-full' width={184} height={184} />
          <div>
            <p className='font-satoshiBold text-3xl'>{discord.discord.data.discord_user.username}</p>
            <p className='font-satoshiMedium text-lg'>{discord.discord.data.activities[0].state}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
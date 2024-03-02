import React from 'react'

const Profile = (discord) => {

  const gif = discord.discord.data.discord_user.avatar.startsWith('a_')

  return (
    
    <div className=''>
      <div>
        <div className='flex flex-col responsive-content-center'>
          <img src={`https://cdn.discordapp.com/avatars/${discord.discord.data.discord_user.id}/${discord.discord.data.discord_user.avatar}.${gif ? 'gif' : 'webp'}?size=4096`} alt='vezir' className='rounded-full flex self-center' width={184} height={184} />
          <div>
            <p className='font-satoshiBold text-3xl flex responsive-content-center'>{discord.discord.data.discord_user.username}</p>
            <p className='font-satoshiMedium text-lg flex responsive-content-center'>
              {discord.discord.data.activities[0].emoji ? <img src={`https://cdn.discordapp.com/emojis/${discord.discord.data.activities[0].emoji.id}.${discord.discord.data.activities[0].emoji.animated == true ? 'gif' : 'webp'}?size=96&quality=lossless`} className="mr-2" alt="img" height={32} width={32}/> : ''}
              {discord.discord.data.activities[0].state}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
import React from 'react'
import socialMedia from './../api/social-media.json'
import { FaPlay } from "react-icons/fa";

const Links = (discord) => {

  return (
    <div className='w-1/2'>
      <div>
        {
          discord.discord.data.spotify !== null ?
          <a href={`https://open.spotify.com/track/${discord.discord.data.spotify.track_id}`} target='_blank' className='bg-activeSpotifyColor hover:bg-hoverSpotifyColor transition-all flex justify-between w-96 h-40 p-4 rounded-xl mb-8 border border-spotifyBorder'>
            <div>
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/168px-Spotify_logo_without_text.svg.png" alt="spotify" width={32} height={32} className='mb-1' />
                <p className='font-satoshiBold'>{discord.discord.data.spotify.song}</p> 
                <p className='font-satoshiMedium'>{discord.discord.data.spotify.artist}</p> 
                <div className='flex items-center bg-spotifyPlay w-max px-4 py-1 text-white font-satoshiBold rounded-full mt-3 transition-all hover:bg-hoverSpotifyPlay'>
                  <FaPlay />
                  <p className='ml-1'>Play</p>
                </div>
              </div>
            </div>
            <div>
              <img src={discord.discord.data.spotify.album_art_url} alt={discord.discord.data.spotify.song} className='rounded-lg shadow-2xl shadow-grayColor' width={128} height={128} />
            </div>
          </a>
          : 
          <div className='bg-inactiveSpotifyColor hover:bg-inactiveHoverSpotifyColor transition-all flex justify-between w-96 h-40 p-4 rounded-xl border mb-8 border-inactiveSpotifyBorder'>
            <div>
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/168px-Spotify_logo_without_text.svg.png" alt="spotify" width={32} height={32} className='mb-1' />
                <p className='font-satoshiBold text-base'>Not listening to anything!</p> 
                <p className='font-satoshiMedium text-base'>{discord.discord.data.discord_user.global_name}</p> 
                {/* <div className='flex items-center bg-inactiveSpotifyPlay w-max px-4 py-1 text-white font-satoshiBold rounded-full mt-3 transition-all hover:bg-inactiveHoverSpotifyPlay'>
                  <FaPlay />
                  <p>Play</p>
                </div> */}
              </div>
            </div>
            <div>
              <img src={`https://cdn.discordapp.com/avatars/${discord.discord.data.discord_user.id}/${discord.discord.data.discord_user.avatar}.webp`} alt='vezir' className='rounded-lg' width={128} height={128} />
            </div>
          </div>
        }
        <p className='font-satoshiBlack text-2xl'>Social Media</p>
        <div className='grid grid-cols-4 gap-1 mt-10'>
          {socialMedia.map((x) => (
            <a href={x.url} className='p-3 rounded-xl bg-white border border-gray-200 text-alisBlue h-44 w-44 flex flex-col justify-between'>
              <div>
                <img src={x.logo} alt={x.label} width={32} height={32} className='rounded-md mb-2' />
                <p className='font-satoshiBold text-black'>{x.label}</p>
                <p className='font-satoshiMedium text-sm text-grayColor'>{x.description}</p>
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

export default Links
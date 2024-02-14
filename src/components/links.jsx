import React from 'react'
import socialMedia from './../api/social-media.json'
import { FaPlay } from "react-icons/fa";

const Links = (discord) => {

  let y;

  discord.discord.data.activities.filter(x => x.name == 'Visual Studio Code').map(x => y = x)

  return (
    <div className='w-1/2'>
      <div>
        <div className='grid grid-cols-2 gap-8'>
          {
            discord.discord.data.spotify !== null ?
            <a href={`https://open.spotify.com/track/${discord.discord.data.spotify.track_id}`} target='_blank' className='bg-activeSpotifyColor hover:bg-hoverSpotifyColor items-center transition-all flex justify-between w-[390px] h-[180px] p-6 rounded-3xl mb-8 border border-spotifyBorder'>
              <div>
                <div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/168px-Spotify_logo_without_text.svg.png" alt="spotify" width={32} height={32} className='mb-1' />
                  <p className='font-satoshiBold w-48'>{discord.discord.data.spotify.song}</p> 
                  <p className='font-satoshiMedium'>{discord.discord.data.spotify.artist}</p> 
                  <div className='flex items-center bg-spotifyPlay w-max px-4 py-1 text-white font-satoshiBold rounded-full mt-2 transition-all hover:bg-hoverSpotifyPlay'>
                    <FaPlay />
                    <p className='ml-1'>Play</p>
                  </div>
                </div>
              </div>
              <div>
                <img src={discord.discord.data.spotify.album_art_url} alt={discord.discord.data.spotify.song} className='rounded-lg shadow-2xl shadow-grayColor ml-5' width={128} height={128} />
              </div>
            </a>
            : 
            <div className='bg-inactiveSpotifyColor hover:bg-inactiveHoverSpotifyColor transition-all flex justify-between w-[390px] h-[180px] p-6 rounded-3xl border mb-8 border-inactiveSpotifyBorder'>
              <div>
                <div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/168px-Spotify_logo_without_text.svg.png" alt="spotify" width={32} height={32} className='mb-1' />
                  <p className='font-satoshiBold text-base  w-48'>Not listening to anything!</p> 
                  <p className='font-satoshiMedium text-base'>{discord.discord.data.discord_user.global_name}</p> 
                  <div className='flex items-center bg-inactiveSpotifyPlay w-max px-4 py-1 text-white font-satoshiBold rounded-full mt-2 transition-all hover:bg-inactiveHoverSpotifyPlay'>
                    <FaPlay />
                    <p>Play</p>
                  </div>
                </div>
              </div>
              <div>
                <img src={`https://cdn.discordapp.com/avatars/${discord.discord.data.discord_user.id}/${discord.discord.data.discord_user.avatar}.webp`} alt='vezir' className='rounded-lg shadow-2xl shadow-grayColor ml-5' width={128} height={128} />
              </div>
            </div>
          }
          {
            y ?
            <a href={`https://discord.gg/NHVWrPAZQF`} target='_blank' className='bg-vsCodeUnhover hover:bg-vsCodeHover items-center transition-all flex justify-between w-[390px] h-[180px] p-6 rounded-3xl mb-8 border border-vsCodeBorder'>
              <div>
                <img src="https://raw.githubusercontent.com/LeonardSSH/vscord/main/assets/icons/vscode.png" alt="vscode" width={32} height={32} className='mb-5 rounded-lg ' />
                <div>
                  <div className='flex flex-col justify-center'>
                    <p className='font-satoshiBold'>{y.name}</p> 
                    <p className='font-satoshiMedium text-sm'>{y.state}</p> 
                    <p className='font-satoshiMedium text-sm'>{y.details}</p> 
                  </div>
                  {/* <div className='flex items-center bg-spotifyPlay w-max px-4 py-1 text-white font-satoshiBold rounded-full mt-2 transition-all hover:bg-hoverSpotifyPlay'>
                    <FaPlay />
                    <p className='ml-1'>Play</p>
                  </div> */}
                </div>
              </div>
              <div>
                <img src={y.state ? `https://raw.githubusercontent.com/LeonardSSH/vscord/main/assets/icons/${y.assets.large_text}.png` : `https://raw.githubusercontent.com/LeonardSSH/vscord/main/assets/icons/idle-vscode.png`} alt={y.assets.large_text} className='rounded-lg shadow-2xl shadow-grayColor ml-5' width={128} height={128} />
              </div>
            </a>
            : ``
          }
        </div>
        <p className='font-satoshiBlack text-2xl'>Social Media</p>
        <div className='container grid grid-cols-4 gap-1 mt-10 items-center justify-center mx-auto'>
          {socialMedia.map((x) => (
            <a href={x.url} className='p-6 rounded-3xl bg-white border mx-auto border-gray-200 text-alisBlue h-max w-44 flex flex-col justify-between hover:bg-gray-100'>
              <div className='mb-2'>
                <img src={x.logo} alt={x.label} width={32} height={32} className='rounded-md mb-2' />
                <p className='font-satoshiBold text-black'>{x.label}</p>
                <p className='font-satoshiMedium text-sm text-grayColor'>{x.description}</p>
              </div>
              <div className=''>
                <p className={`bg-blue-400 text-white font-medium text-sm w-max px-3 py-1 rounded-md transition hover:bg-blue-500`}>Follow</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Links
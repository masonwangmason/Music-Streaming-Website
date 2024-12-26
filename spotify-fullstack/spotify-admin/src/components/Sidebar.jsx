import React from 'react'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='bg-[#003A10] min-h-screen pl-[4vw]'>
        
        <img src={assets.logo} alt="" className="mt-5 w-[max(10vw,100px)] hidden sm:block" />
        <img src={assets.logo_small} alt="" className="mt-5 w-[max(5vw,40px)] mr-5 sm:hidden block" />

            <div className="flex flex-col gap-5 mt-10">
            
                <div className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium">
                    <img className='w-5' src={assets.add_song} alt="" />
                    <p className='hidden sm:block'>Add Song</p>
                </div>

                <div className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium">
                    <img className='w-5' src={assets.song_icon} alt="" />
                    <p className='hidden sm:block'>List Songs</p>
                </div>

                <div className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium">
                    <img className='w-5' src={assets.add_album} alt="" />
                    <p className='hidden sm:block'>Add Album</p>
                </div>

                <div to='/list-albums' className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium">
                    <img className='w-5' src={assets.album_icon} alt="" />
                    <p className='hidden sm:block'>List Album</p>
                </div>
            
            </div>
    </div>
  )
}

export default Sidebar

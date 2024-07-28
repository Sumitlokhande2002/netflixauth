import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="px-8 p-8 md:px-12 md:py-12 absolute bg-gradient-to-r from-black aspect-video text-white">
    <h1 className=" pt-20 md:pt-32 text-2xl md:text-4xl font-bold">{title}</h1>
    <p className="hidden md:block md:py-4 md:w-2/4">{overview}</p>
    <button className=" px-10 md:px-12 my-2 md:py-2 text-lg  rounded-lg bg-white text-black hover:bg-opacity-80">Play</button>
    <button className="hidden md:inline-block px-12 my-2 py-2 text-lg bg-opacity-30 rounded-lg bg-white m-2 text-black  hover:bg-opacity-80">❕ More info</button>

    
    </div>
  )
}

export default VideoTitle

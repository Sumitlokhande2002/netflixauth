import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
const MainContainer = () => {

const movies= useSelector((store)=>store.movie?.nowPlayingMovies)

if(movies==null) return;
const mainMovies=movies[0]
console.log(mainMovies);
const{title,overview,id}=mainMovies;

  return (
    <div className="bg-black">
      <VideoTitle title={title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer

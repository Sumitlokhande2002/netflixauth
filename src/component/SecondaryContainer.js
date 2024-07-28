import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movie)
if(movies==null) return;
  console.log(movies)
  console.log(movies.popularMovies)

  return (
    <div className="bg-black">
    <div className="md:-mt-72 relative z-20 pl-4 md:pl-12">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Top Reted"} movies={movies.topRatedMovies}/>
      <MovieList title={"Up Coming"} movies={movies.upComingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer

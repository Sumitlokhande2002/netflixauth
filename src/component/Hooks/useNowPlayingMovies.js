import { useEffect } from "react";
import { addNowPlayingMovies } from "../movieSlice";
import { useDispatch } from "react-redux";
import { MOVIE_OPTIONS } from "../constant";
const useNowPlayingMovies=()=>{
const dispatch=useDispatch();
  
const playMovies= async()=>{
  const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',MOVIE_OPTIONS)

  const json = await data.json();
  console.log(json.results);

  dispatch(addNowPlayingMovies(json.results))
}
useEffect(()=>{
  playMovies();
  },[]);

};
export default useNowPlayingMovies;


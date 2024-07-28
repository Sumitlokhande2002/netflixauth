import { useEffect } from "react";
import { addPopularMovies } from "../movieSlice";
import { useDispatch } from "react-redux";
import { MOVIE_OPTIONS } from "../constant";
const usePopularMovies=()=>{
const dispatch=useDispatch();
  
const playMovies= async()=>{
  const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',MOVIE_OPTIONS)

  const json = await data.json();
  console.log(json.results);

  dispatch(addPopularMovies(json.results))
}
useEffect(()=>{
  playMovies();
  },[]);

};
export default usePopularMovies;


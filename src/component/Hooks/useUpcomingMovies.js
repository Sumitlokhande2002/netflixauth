import { useEffect } from "react";
import { addUpComingMovies} from "../movieSlice";
import { useDispatch } from "react-redux";
import { MOVIE_OPTIONS } from "../constant";
const useUpcomingMovies=()=>{
const dispatch=useDispatch();
  
const playMovies= async()=>{
  const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',MOVIE_OPTIONS)

  const json = await data.json();
  console.log(json.results);

  dispatch(addUpComingMovies(json.results))
}
useEffect(()=>{
  playMovies();
  },[]);

};
export default useUpcomingMovies;


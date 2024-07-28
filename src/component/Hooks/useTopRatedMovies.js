import { useEffect } from "react";
import { addTopRatedMovies} from "../movieSlice";
import { useDispatch } from "react-redux";
import { MOVIE_OPTIONS } from "../constant";
const useTopRatedMovies=()=>{
const dispatch=useDispatch();
  
const playMovies= async()=>{
  const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',MOVIE_OPTIONS)

  const json = await data.json();
  console.log(json.results);

  dispatch(addTopRatedMovies(json.results))
}
useEffect(()=>{
  playMovies();
  },[]);

};
export default useTopRatedMovies;


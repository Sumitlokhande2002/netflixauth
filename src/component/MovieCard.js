import { MOVIE_IMG_PATH } from "./constant"
const MovieCard = ({poster}) => {
  return (
    <div className="w-40 m-1 ">
        <img className="rounded-md" alt="img" src={MOVIE_IMG_PATH+poster}/>      
    </div>
  )
}

export default MovieCard

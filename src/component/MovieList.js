import MovieCard from "./MovieCard"

const MovieList = ({title,movies}) => {
    
    if(movies==null) return console.log("hello");
    console.log(movies[0])
  return (
    <div className="overflow-x-hidden">
        <h1 className="px-4  text-2xl font-bold text-white m-2">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex cursor-pointer">
        {movies.map((movie)=><MovieCard key={movie.id} poster={movie.poster_path}/>)} 
        </div>     
        </div>     
    </div>
  )
}

export default MovieList

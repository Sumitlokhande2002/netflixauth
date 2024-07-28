
import { useSelector } from "react-redux";
import useMovieTrailer  from "./Hooks/useMovieTrailer"

const VideoBackground = ({movieId}) => {
  const trailerVideo=useSelector(store=>store.movie?.movieTrailer);


  useMovieTrailer(movieId);

  return (
    <div>
      <iframe className="aspect-video w-full md:pb-[14.5%] "  src={"https://www.youtube.com/embed/VWavstJydZU?"+trailerVideo?.key+"?&autoplay=1&mute=1&loop=1&controls=0&showinfo=0"} 
      title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
    </div>
  )
}

export default VideoBackground

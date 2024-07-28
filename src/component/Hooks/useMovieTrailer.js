import { useEffect } from 'react'
import { MOVIE_OPTIONS } from '../constant'
import { useDispatch} from 'react-redux'
import { addMovieTrailer } from '../movieSlice'

const useMovieTrailer=(movieId)=>{

    const dispatch = useDispatch()


    const videoBackgroundTrailer = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", MOVIE_OPTIONS)

        const json = await data.json()
        const filterData = json.results
        const trailer = filterData.filter((video) => video?.type === "Trailer")
        const finalTrailer = trailer[0]
        console.log(finalTrailer)

        // const trailer=json.filter
        dispatch(addMovieTrailer(finalTrailer))
    }

    useEffect(() => {
        videoBackgroundTrailer()
    }, [])
}

export default useMovieTrailer;
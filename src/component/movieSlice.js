import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{Movies:null},
    movieTrailer:null,
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addUpComingMovies:(state,action)=>{
            state.upComingMovies=action.payload;
        },
    }
})
export const {addNowPlayingMovies,addMovieTrailer,addPopularMovies,addUpComingMovies,addTopRatedMovies}=movieSlice.actions;

export default movieSlice.reducer
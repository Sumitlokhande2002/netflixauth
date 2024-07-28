import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieSlice from "../movieSlice";
import gptReducer from "./gptSlice.js";
import configReducer from"./configSlice.js"

const appStore=configureStore(
    {
        reducer:{
            user:userReducer,
            movie:movieSlice,
            gpt:gptReducer,
            config:configReducer
            }
    }
)

export default appStore;
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./movieSlice"

const appStore = configureStore(
    //One slice
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer
        }
    }
)

export default appStore
    
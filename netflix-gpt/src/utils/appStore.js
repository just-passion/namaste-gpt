import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"

const appStore = configureStore(
    //One slice
    {
        reducer: {
            user: userReducer
        }
    }
)

export default appStore
    
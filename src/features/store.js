import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./dataSlice"

const appStore = configureStore({
    reducer: rootReducer
})

export default appStore
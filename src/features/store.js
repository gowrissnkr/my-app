import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./productSlice"

const appStore = configureStore({
    reducer: rootReducer
})

export default appStore
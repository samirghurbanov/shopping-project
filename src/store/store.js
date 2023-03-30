import { configureStore } from "@reduxjs/toolkit";
import basketSlicer from "../features/basketSlicer";

export const store = configureStore({
    reducer: {
        basket: basketSlicer
    }
})
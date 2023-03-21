import { configureStore } from '@reduxjs/toolkit'
import carReducer from "./src/features/carSlice/carSlice"

export const store = configureStore({
  reducer: {
    car : carReducer
  },
});
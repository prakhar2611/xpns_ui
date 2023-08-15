import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./Reducer/counterSlice"
import metaReducer from "./Reducer/metaSlice"

export default configureStore({
  reducer: {
    counter : counterReducer,
    meta : metaReducer
  },
})
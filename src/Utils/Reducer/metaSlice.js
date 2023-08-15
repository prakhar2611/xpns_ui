import { createSlice } from '@reduxjs/toolkit'

export const metaSlice = createSlice({
  name: 'meta',
  initialState: {
    value: {
        'title' : 'This Nice Song !',
        'thumbnail' : '',
        'views': 0,
        'duration':0
      }
  },
  reducers: {
    incrementByvalue: (state, action) => {
      state.value.title = action.payload.title
      state.value.thumbnail = action.payload.thumbnail
      state.value.views = action.payload.views
      state.value.duration = action.payload.duration

    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementByvalue } = metaSlice.actions

export default metaSlice.reducer
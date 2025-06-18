import { configureStore } from '@reduxjs/toolkit'
import sliceName from './slice'

export const store = configureStore({
  reducer: {
    users: sliceName,
  },
})
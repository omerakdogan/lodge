import { configureStore } from '@reduxjs/toolkit';
import favsReducer from '../utilities/favsSlice';

export const store = configureStore({
  reducer: {
    favs: favsReducer
  }
});



import userReducer from '../src/redux/authslices'

import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
    reducer: {
      userSlice: userReducer, 
        
    },
  });

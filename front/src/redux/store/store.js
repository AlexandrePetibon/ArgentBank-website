import { configureStore } from "@reduxjs/toolkit"; // Importez configureStore depuis @reduxjs/toolkit
import userAuthReducer from '../reducers/userAuthSlice'; 
import profileReducer from "../reducers/profilSlice"; 

const store = configureStore({ // Utilisez configureStore au lieu de createStore
  reducer: {
    auth: userAuthReducer,
    profile: profileReducer
  }
});

export default store;

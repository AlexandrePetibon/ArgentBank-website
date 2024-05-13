// profilSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  userName: "",
};

const profilSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setGetProfile: (state, action) => {
      const { email, firstName, lastName, userName } = action.payload.data.body;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.userName = userName;
    },
    resetProfile: () => initialState,
    setNewUserName: (state, action) => {
      state.userName = action.payload.editUserName;
    },
  },
});

export const { setGetProfile, resetProfile, setNewUserName } = profilSlice.actions;
export default profilSlice.reducer;

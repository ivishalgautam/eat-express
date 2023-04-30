const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isOpen: false,
};

const navbarSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    openNavbar: (state) => {
      state.isOpen = true;
    },
    closeNavbar: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openNavbar, closeNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;

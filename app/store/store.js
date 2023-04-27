import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import vegetarianSlice from "./features/vegetarianSlice";
import popularSlice from "./features/popularSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    vegetarian: vegetarianSlice,
    popular: popularSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

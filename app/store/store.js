import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import vegetarianSlice from "./features/vegetarianSlice";
import popularSlice from "./features/popularSlice";
import navbarSlice from "./features/navbarSlice";
import recipeSlice from "./features/recipeSlice";
import searchRecipeSlice from "./features/searchRecipeSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    vegetarian: vegetarianSlice,
    popular: popularSlice,
    recipe: recipeSlice,
    searched: searchRecipeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const wrapper = createWrapper(store);

import { configureStore } from "@reduxjs/toolkit";

import vegetarianSlice from "./features/vegetarianSlice";
import popularSlice from "./features/popularSlice";
import navbarSlice from "./features/navbarSlice";
import recipeSlice from "./features/recipeSlice";
import searchRecipeSlice from "./features/searchRecipeSlice";
import cartSlice from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    vegetarian: vegetarianSlice,
    popular: popularSlice,
    recipe: recipeSlice,
    searched: searchRecipeSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

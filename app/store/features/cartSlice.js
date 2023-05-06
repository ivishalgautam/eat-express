import nextConfig from "@/next.config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartRecipes: [],
  ids: [],
  msg: "",
  isLoading: true,
};

export const fetchCartRecipes = createAsyncThunk(
  "recipe/cart",
  async (_, thunkAPI) => {
    try {
      return new Promise((resolve) => setTimeout(resolve, 2000)).then(
        async () => {
          const {
            cart: { ids },
          } = thunkAPI.getState();
          let ids_str = ids.join();

          const resp = await axios(
            `https://api.spoonacular.com/recipes/informationBulk?ids=${ids_str}&apiKey=${nextConfig.env.apikey}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          return resp;
        }
      );
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong!");
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addRecipeId: (state, action) => {
      if (!state.ids.includes(action.payload)) {
        state.ids.push(action.payload);
      }
    },
    removeRecipeId: (state, action) => {
      state.ids = state.ids.filter((id) => id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartRecipes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCartRecipes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cartRecipes = [];
      state.cartRecipes.push(action.payload.data);
      //   console.log(action.payload);
    });
    builder.addCase(fetchCartRecipes.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { addRecipeId, removeRecipeId } = cartSlice.actions;
export default cartSlice.reducer;

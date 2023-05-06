import nextConfig from "@/next.config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  recipe: [],
  isLoading: true,
};

export const fetchRecipe = createAsyncThunk(
  "recipe/getRecipe",
  async (recipeid, thunkAPI) => {
    try {
      return new Promise((resolve) => setTimeout(resolve, 2 * 1000)).then(
        async () => {
          // let recipe = localStorage.getItem("recipe");
          // if (recipe) {
          //   return JSON.parse(recipe);
          // } else {
          const resp = await axios(
            `https://api.spoonacular.com/recipes/${recipeid}/information?apiKey=${nextConfig.env.apikey}`
          );
          // localStorage.setItem("recipe", JSON.stringify(resp));
          return resp;
          // }
        }
      );
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong!");
    }
  }
);

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecipe.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRecipe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.recipe = [];
      state.recipe.push(action.payload.data);
      // console.log(action.payload.data);
    });
    builder.addCase(fetchRecipe.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default recipeSlice.reducer;

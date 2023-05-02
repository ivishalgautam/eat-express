import nextConfig from "@/next.config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  search_results: [],
  search_query: "",
  isLoading: true,
};

export const searchRecipes = createAsyncThunk(
  "recipes/searchRecipes",
  async (query, thunkAPI) => {
    try {
      return new Promise((resolve) => setTimeout(resolve, 3000)).then(
        async () => {
          const {
            searched: { search_query },
          } = thunkAPI.getState();
          let recipe = localStorage.getItem(search_query);
          if (recipe) {
            return JSON.parse(recipe);
          } else {
            let resp = await axios(
              `https://api.spoonacular.com/recipes/complexSearch?apiKey=${nextConfig.env.apikey}&query=${query}&number=15`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            if (search_query !== "") {
              localStorage.setItem(search_query, JSON.stringify(resp));
            }
            return resp;
          }
        }
      );
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong!");
    }
  }
);

export const searchRecipeSlice = createSlice({
  name: "searched_recipes",
  initialState,
  reducers: {
    addQuery: (state, action) => {
      state.search_query = "";
      state.search_query += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchRecipes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchRecipes.fulfilled, (state, action) => {
      state.search_results = [];
      state.isLoading = false;
      state.search_results.push(action.payload.data.results);
      // console.log("payload", action.payload.data.results);
    });
    builder.addCase(searchRecipes.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
export const { addQuery } = searchRecipeSlice.actions;
export default searchRecipeSlice.reducer;

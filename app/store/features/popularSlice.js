import nextConfig from "@/next.config";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

const initialState = {
  recipes: [],
  isLoading: true,
};

export const fetchRecipes = createAsyncThunk(
  "recipes/getPopularRecipes",
  async (name, thunkAPI) => {
    try {
      return new Promise((resolve) => setTimeout(resolve, 2000)).then(
        async () => {
          let popular = localStorage.getItem("recipes_popular");
          if (popular) {
            return JSON.parse(popular);
          } else {
            const resp = await axios(
              `https://api.spoonacular.com/recipes/random?apiKey=${nextConfig.env.apikey}&number=9`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            localStorage.setItem("recipes_popular", JSON.stringify(resp));
            return resp;
          }
        }
      );
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong!");
    }
  }
);

export const popularSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.recipes.push(action.payload.data.recipes);
      // console.log(action.payload.data.recipes);
      state.isLoading = false;
    });
    builder.addCase(fetchRecipes.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default popularSlice.reducer;

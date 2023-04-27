import nextConfig from "@/next.config";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

const initialState = {
  recipes: [],
  isLoading: true,
};

export const fetchRecipes = createAsyncThunk(
  "recipes/getVegRecipes",
  async (name, thunkAPI) => {
    try {
      return new Promise((resolve) => setTimeout(resolve, 2000)).then(
        async () => {
          let vegetarian = localStorage.getItem("recipes_vegetarian");
          if (vegetarian) {
            return JSON.parse(vegetarian);
          } else {
            const resp = await axios(
              `https://api.spoonacular.com/recipes/complexSearch?apiKey=${nextConfig.env.apikey}&tags=${name}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            localStorage.setItem("recipes_vegetarian", JSON.stringify(resp));
            return resp;
          }
        }
      );
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong!");
    }
  }
);

export const vegetarianSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.recipes.push(action.payload.data.results);
      // console.log(action.payload.data);
      state.isLoading = false;
    });
    builder.addCase(fetchRecipes.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default vegetarianSlice.reducer;

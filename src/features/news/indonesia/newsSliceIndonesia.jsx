import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const news_API_Indonesia =
  `https://newsapi.org/v2/top-headlines?country=id&from=2022-09-30&sortBy=popularity&apiKey=ac65afee406647cbabb22c674ad4c642`
  
const initialState = {
  entities: [],
};

export const fetchNews = createAsyncThunk("articles/fetchNews", async () => {
  const response = await axios.get(news_API_Indonesia);
  return response.data;
});

const newsSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.entities = action.payload.articles;
    });
  },
});

export default newsSlice.reducer;
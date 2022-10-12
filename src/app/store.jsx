import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/news/indonesia/newsSliceIndonesia";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    articles: newsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

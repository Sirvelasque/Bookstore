import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducers from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categoriesReducers,
  },
});

export default store;

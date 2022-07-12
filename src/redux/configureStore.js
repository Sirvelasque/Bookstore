import { configureStore } from 'redux';
import booksReducer from './books/books';
import categoriesReducers from './categories/categories';

const store = configureStore({
  rootReducer: {
    booksReducer,
    categoriesReducers,
  },
});

export default store;

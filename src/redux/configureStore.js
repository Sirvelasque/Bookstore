import { combineReducers, createStore } from 'redux';
import booksReducer from './books/books';
import categoriesReducers from './categories/categories';

const rootReducer = combineReducers({
  booksReducer,
  categoriesReducers,
});

const store = createStore(rootReducer);

export default store;

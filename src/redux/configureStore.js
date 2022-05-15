import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoriesReducers from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categoriesReducers,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;

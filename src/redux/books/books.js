const ADD = 'bookstore/book/ADD_BOOK';
const REMOVE = 'bookstore/book/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/book/GET_BOOKS';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/uoShF4O9zpumxO5gm0vp/books/';

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.book,
      ];

    case REMOVE:
      return [
        ...state.filter((book) => book.item_id !== action.itemid),
      ];

    case GET_BOOKS:
      return action.books;
    default:
      return state;
  }
}

export const addBook = (book) => async (dispatch) => {
  await fetch(`${baseURL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.item_id,
      title: book.title,
      author: book.author,
      category: 'Fiction',
    }),
  });
  dispatch({
    type: ADD,
    book,
  });
};

export function removeBook(itemid) {
  return async (dispatch) => {
    const requestOptions = {
      method: 'DELETE',
      redirect: 'follow',
    };
    const response = await fetch(`${baseURL}${itemid}/`, requestOptions)
      .then((response) => response.text())
      .then((result) => result);
    if (response === 'The book was deleted successfully!') {
      dispatch({ type: REMOVE, itemid });
    }
  };
}

export function getBooks() {
  return async (dispatch) => {
    const response = await fetch(baseURL)
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => `Loading Failed. ${error}`);
    const books = [];
    const tempArr = JSON.parse(response);
    Object.keys(tempArr).forEach((e) => {
      books.push({ ...tempArr[e][0], item_id: e });
    });
    dispatch({ type: GET_BOOKS, books });
  };
}

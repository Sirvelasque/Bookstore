const ADD = 'bookstore/book/ADD_BOOK';
const REMOVE = 'bookstore/book/REMOVE_BOOK';

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.book,
      ];

    case REMOVE:
      return state.filter((book, index) => index !== action.index);

    default:
      return state;
  }
}

export function addBook(book) {
  return { type: ADD, book };
}

export const removeBook = (index) => ({ type: REMOVE, index });

const ADD = 'ADD_BOOK';
const REMOVE = 'REMOVE_BOOK';

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.book,
      ];

    case REMOVE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];

    default:
      return state;
  }
}

export function addBook(book) {
  return { type: ADD, book };
}

export const removeBook = (index) => ({ type: REMOVE, index });

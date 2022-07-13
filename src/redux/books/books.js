const ADD = 'bookstore/book/ADD_BOOK';
const REMOVE = 'bookstore/book/REMOVE_BOOK';

export default function booksReducer(state = [{ title: 'Soul Knife', author: 'Walter Velasquez' }, { title: 'Golden Half', author: 'Walter Velasquez' }], action) {
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

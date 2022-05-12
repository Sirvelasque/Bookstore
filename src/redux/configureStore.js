const ADD = 'ADD_BOOK';
const REMOVE = 'REMOVE_BOOK';

export const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.book,
      ];
    
    case REMOVE:
      return state.filter((book, index) => index !== action.index)
    
    default:
      return state;
  }
}

export function addBook(book){
  return { type: ADD, book}
}

export const removeBook = (index) => {
  return { type: REMOVE, index };
}

import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { getBooks } from '../redux/books/books';

function BookList() {
  const books = useSelector((state) => state.books, shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <div>
      <Form />
      {books.map((book) => (
        <Book
          key={uuidv4()}
          itemid={book.item_id}
          title={book.title}
          author={book.author}
        />
      ))}
    </div>
  );
}

export default BookList;

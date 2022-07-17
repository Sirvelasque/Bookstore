import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { getBooks } from '../redux/books/books';

function BookList() {
  const books = useSelector((state) => state.books, shallowEqual);
  const started = useRef(true);

  const dispatch = useDispatch();
  useEffect(() => {
    if (started.current && books.length === 0) {
      dispatch(getBooks());
      started.current = false;
    }
  }, [started, books.length]);

  return (
    <div className="ListContainer">
      {books.map((book) => (
        <Book
          key={uuidv4()}
          itemid={book.item_id}
          title={book.title}
          author={book.author}
        />
      ))}
      <hr />
      <Form />
    </div>
  );
}

export default BookList;

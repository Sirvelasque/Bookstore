import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { getBooks } from '../redux/books/books';

function BookList() {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div>
      {books.map((book) => (
        <Book
          key={uuidv4()}
          itemid={book.item_id}
          title={book.title}
          author={book.author}
        />
      ))}
      <Form />
    </div>
  );
}

export default BookList;

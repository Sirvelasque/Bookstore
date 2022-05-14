import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

function BookList() {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book, i) => (
        <Book
          key={uuidv4()}
          index={i}
          title={book.title}
          author={book.author}
        />
      ))}
      <Form />
    </div>
  );
}

export default BookList;

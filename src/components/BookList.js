import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import Form from './Form';

function BookList() {
  const books = [];

  return (
    <div>
      {books.map((book) => (
        <Book
          key={uuidv4()}
          title={book.genre}
          author={book.author}
        />
      ))}
      <Form />
    </div>
  );
}

export default BookList;
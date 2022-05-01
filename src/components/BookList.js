import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import Form from './Form';

function BookList() {
  const books = [];

  return (
    <div>
      {books.map((el) => (
        <Book
          key={uuidv4()}
          genre={el.genre}
          title={el.genre}
          author={el.author}
        />
      ))}
      <Form />
    </div>
  );
}

export default BookList;
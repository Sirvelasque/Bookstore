import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

let itemid = 0;

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const dispatch = useDispatch();

  const clearInputs = () => {
    setTitle('');
    setAuthor('');
  };

  const generateid = () => {
    itemid = uuidv4();
  };

  return (
    <form>
      <input type="text" value={title} onInput={(e) => handleInput(e)} />
      <input type="text" value={author} onInput={(e) => handleAuthor(e)} />
      <button
        type="button"
        onClick={() => {
          generateid();
          dispatch(addBook({ title, author, itemid }));
          clearInputs();
        }}
      >
        ADD BOOK
      </button>
    </form>
  );
}

export default Form;

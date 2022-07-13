import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

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

  return (
    <form>
      <input type="text" value={title} onInput={(e) => handleInput(e)} />
      <input type="text" value={author} onInput={(e) => handleAuthor(e)} />
      <button
        type="button"
        onClick={() => {
          dispatch(addBook({ title, author }));
          clearInputs();
        }}
      >
        ADD BOOK
      </button>
    </form>
  );
}

export default Form;

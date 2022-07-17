import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import style from './css/form.module.css';

let id = 0;

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
    id = uuidv4();
  };

  return (
    <form className={style.addBookForm}>
      <input className={style.title} type="text" value={title} onInput={(e) => handleInput(e)} />
      <input className={style.author} type="text" value={author} onInput={(e) => handleAuthor(e)} />
      <select className={style.category} name="cars" id="category">
        <option value="" disabled>Categories</option>
        <option value="Thriller">Thriller</option>
        <option value="Horror">Horror</option>
        <option value="Detective &amp; Mystery">Detective &amp; Mystery</option>
        <option value="Romance">Romance</option>
        <option value="Adventure">Adventure</option>
        <option value="Dystopian">Dystopian</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Fantasy">Fantasy</option>
      </select>
      <button
        type="button"
        className={style['add-button']}
        onClick={() => {
          generateid();
          dispatch(addBook({ title, author, item_id: id }));
          clearInputs();
        }}
      >
        ADD BOOK
      </button>
    </form>
  );
}

export default Form;

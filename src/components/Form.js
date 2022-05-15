import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import styles from './AddBookForm.module.css';

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
    <form className={styles.addBookForm}>
      <input className={styles.title} type="text" value={title} onInput={(e) => handleInput(e)} />
      <input className={styles.author} type="text" value={author} onInput={(e) => handleAuthor(e)} />
      <select className={styles.category} name="cars" id="category">
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
        className={styles['add-button']}
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

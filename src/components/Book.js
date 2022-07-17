import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import style from './css/book.module.css';

function Book(props) {
  const dispatch = useDispatch();
  const { title, author, itemid } = props;
  return (
    <div className={style.book}>
      <div className={style['left-col']}>
        <div className={style.category}>Fiction</div>
        <div className={style.Title}>{title}</div>
        <div className={style.Author}>{author}</div>
        <div className={style.actions}>
          <button type="button">Comments</button>
          |
          <button
            type="button"
            onClick={() => {
              dispatch(removeBook(itemid));
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <div className={style['center-col']}>
        <div className={style.progress} />
        <div>
          <div className={style['Percent-Complete']}>64%</div>
          <div className={style.Completed}>Completed</div>
        </div>
      </div>
      <div className={style.border} />
      <div className={style['right-col']}>
        <div>
          <div className={style.chapter}>CURRENT CHAPTER</div>
          <div className={style['chapter-number']}>CHAPTER 17</div>
        </div>
        <button type="button" className={style['update-progress']}>UPDATE PROGRESS</button>
      </div>

    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemid: PropTypes.string.isRequired,
};

export default Book;

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const dispatch = useDispatch();
  const { title, author, index } = props;
  return (
    <div className="book">
      {title}
      <hr />
      {author}
      <hr />
      <button
        type="button"
        onClick={() => {
          dispatch(removeBook(index));
        }}
      >
        Delete
      </button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Book;

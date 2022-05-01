import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { genre, title, author } = props;
  return (
    <div className="book">
      {title}<hr />
      {author}<hr />
      {genre}<hr />
      <button type="button">Delete</button>
    </div>
  );
}

Book.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
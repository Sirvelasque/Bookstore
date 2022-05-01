import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { title, author } = props;
  return (
    <div className="book">
      {title}
      <hr />
      {author}
      <hr />
      <button type="button">Delete</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;

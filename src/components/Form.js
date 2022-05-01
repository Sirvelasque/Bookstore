import React, { useState } from 'react';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <form>
      <input type="text" value={title} onInput={(e) => handleInput(e)} />
      <input type="text" value={author} onInput={(e) => handleAuthor(e)} />
      <button type="submit">ADD BOOK</button>
    </form>
  );
}

export default Form;

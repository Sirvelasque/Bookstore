import React, { useState } from 'react';

function Form() {
  const [title, setTitle] = useState('', '');

  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form>
      <input type="text" value={title} onInput={(e) => handleInput(e)} />
      <select>
        <option value="Love Comedy">Love Comedy</option>
        <option value="Adventures">Adventures</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  );
}

export default Form;
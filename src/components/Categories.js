import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  return (
    <div className="checkStatus">
      <button
        type="button"
        onClick={() => { dispatch(checkStatus()); }}
      >
        Check Status
      </button>
    </div>
  );
}

export default Categories;

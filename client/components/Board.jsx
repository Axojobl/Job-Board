import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Category from './Category.jsx';
import addCategoryActionCreator from '../actions/actions.js';

const Board = () => {
  return (
    <div>
      <h2>AxolBoard</h2>
      <div className="input-container">
        <div className="left-content">Left Content Here</div>
        <div className="right-content">
          <right>
          <button>Add Category</button>
          </right>
        </div>
      </div>
      <div className="board-container">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};
// onClick={updateCardActionCreator} //saved for later, put back in button when read
export default Board;

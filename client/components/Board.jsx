import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Category from './Category.jsx'
import addCategoryActionsCreator from '../'

const Board = () => {

  return (
    <div>
      <button onClick={addCategoryActionsCreator}>Add Category</button>
      {categories}
    </div>
  )
}

export default Board;
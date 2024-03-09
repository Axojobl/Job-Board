import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCardActionCreator } from '../actions/actions.js';

import Card from './Card.jsx'
const Category = () => {
  const cards = [];

  return (
    <div>
      <button id='addJob' onClick={addCardActionCreator}>Add Job</button>
      {cards}
    </div>
  )
}

export default Category;
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCardActionCreator } from '../actions/actions.js';

import Card from './Card.jsx';

const Category = () => {
  return (
    <div class="category">
      <div className='category-button'>
        <button id="addJob" onClick={addCardActionCreator}>
          Add Job
        </button>
      </div>
      <div>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Category;

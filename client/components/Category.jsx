import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCardActionCreator } from '../actions/actions.js';

import Card from './Card.jsx';

const Category = ({ name }) => {
  return (
    <div className="category">
      <div className='category-button'>
        <button id="addJob" onClick={addCardActionCreator}>
          Add Job
        </button>
      </div>
      <div className='category-header'>
        <p>{name}</p>
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

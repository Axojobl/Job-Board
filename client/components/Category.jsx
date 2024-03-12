import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCardActionCreator } from '../actions/actions.js';

import Card from './Card.jsx';

const Category = ({ name, id }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  function openModal(e) {
    console.log('id: ', id);
    console.log('name: ', name);

    e.preventDefault();
    setIsOpen(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const job_role_name = e.target[0].value;
    const company_name = e.target[1].value;
    const details = e.target[2].value;
    const category_id = e.target[3].value;

    try {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;

      const response = await fetch('/api/job', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          job_role_name,
          company_name,
          details,
          status,
          date_applied: formattedDate,
          category_id,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        // dispatch(addCardActionCreator(event.target[0].value, data._id));
      }
    } catch (error) {
      console.error('Fail in submitHandler', error);
    }

    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <>
      <Modal isOpen={isOpen} style={customStyles} ariaHideApp={false}>
        <button onClick={() => setIsOpen(false)}>CLOSE</button>
        <h1>Create a new Job </h1>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            name='job_role_name'
            type='text'
            placeholder='Enter Job Name'
          />
          <input
            name='company_name'
            type='text'
            placeholder='Enter Company Name'
          />
          <input name='details' type='text' placeholder='Enter Job Details' />
          <input name='category_id' type='hidden' defaultValue={id} />
          <button type='submit'>Submit</button>
        </form>
      </Modal>
      <div className='category'>
        <div className='category-button'>
          <button id='addJob' onClick={openModal}>
            Add Job
          </button>
        </div>
        <div className='category-header'>
          <p>
            <strong>{name}</strong>
          </p>
        </div>
        <div>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Category;

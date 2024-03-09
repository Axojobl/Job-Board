/**
 * ************************************
 *
 * @module  boardReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

// ADD SQL QUERIES TO GET INITIAL STATE HERE


const initialState = {
    board:[]
};



const boardReducer = (state = initialState, action) => {
  let board;


  switch (action.type) {
    case types.ADD_CATEGORY:

    //SQL query to add a category and then return the updated list of cateogries
    const categories = 'PLACEHOLDER'; // RETURN from SQL query to populate 


    return {
      ...state,
      board: categories,
    }
    break;
    case types.DELETE_CATEGORY:
    
    //SQL query to add a category and then return the updated list of cateogries
    const categories = 'PLACEHOLDER'; // RETURN from SQL query to populate 


    return {
      ...state,
      board: categories,
    }
    
    case types.UPDATE_CATEGORY:
    
    //SQL query to add a category and then return the updated list of cateogries
    const categories = 'PLACEHOLDER'; // RETURN from SQL query to populate 


    return {
      ...state,
      board: categories,
    }
  
  
  }
}
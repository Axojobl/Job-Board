/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import { useDispatch } from 'react-redux';
import * as types from '../constants/actionTypes';

// Add Card action creator
export const addCardActionCreator = (cardId) => ({
  type: types.ADD_CARD,
  payload: { cardId },
});

// add more action creators
export const delCardActionCreator = (cardId) => ({
  type: types.DELETE_CARD,
  payload: { cardId },
});

export const updateCardActionCreator = (cardId) => ({
  type: types.UPDATE_CARD,
  payload: { cardId },
});

export const addCategoryActionsCreator = (categoryId) => ({
  type: types.ADD_CATEGORY,
  payload: { catagoryId },
});

export const deleteCategoryActionsCreator = (categoryId) => ({
  type: types.DELETE_CATEGORY,
  payload: { catagoryId },
});

export const updateCategoryActionsCreator = (categoryId) => ({
  type: types.UPDATE_CATEGORY,
  payload: { catagoryId },
});
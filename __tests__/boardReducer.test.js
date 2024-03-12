/**
 * ************************************
 *
 * @author Evan Griffith
 * @date March 12, 2024
 * @description Tests the boardReducer file
 *
 * ************************************
 */

import subject from '../client/reducers/boardReducer';


describe('Job-Board boardReducer', () => {
  let state; // Default state object

  /**
   * Before every test, reset state to the same defaults as 
   */
  beforeEach(() => {
    state = {
      categories: [],
    }
  });

  describe('default state', () => {
    it('should return a default state when given undefined state', ()  => {
      expect(subject(undefined, { type: undefined , payload: 'Test' })).toEqual(state);
    })
  })

  describe('unrecognized action types', () => {
    it('should return the original state with no duplication', () => {
      // Do test
    });
  });

  describe('ADD_TO_STATE', () => {

    // declare an add_to_state action

    it('new state should be equal to passed in payload', () => {

    });

    it('new state should not be passed in payload', () => {

    });

    it('new categories state should consist of an array of objects that have only two props, _id, and category_name', () => {

    });

    it('Array of categories should be unique', () => {

    });
  })


  describe('ADD_CATEGORY', () => {

    // declare an add category action that has categoryName and _id

    it('Should add a category', () => {
      // Do test
    });

    it('Should add a category inclusive of previous categories', () => {
      // Do Test
    });

    it('Final category should be equal to the action added', () => {
      // Do Test
    })


  })

})
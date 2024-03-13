const categoryController = require('../../server/controllers/categoryController');

//using JEST

// const categoryController = {};

// categoryController.getOneCategory = (req, res, next) => {
//   const { id } = req.params;
//   console.log('I am category id', id);
//   const query = `
//         SELECT *
//         FROM categories
//         WHERE category_id = '${id}'
//     `;
//   db.query(query)
//     .then((result) => {
//       res.locals.getOneCategory = result.rows[0];
//       return next();
//     })
//     .catch((err) => {
//       return next({
//         log: 'Error retrieving category from database',
//         status: 400,
//         message: { err: 'An error occurred' },
//       });
//     });
// };

//be called once
//should return an error if there is no id in req params
//test to see if res.locals.getOneCategory is updated

describe('It should return an error if there is no id in params', () => {
    
})
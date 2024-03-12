const db = require('../models/jobModels');

const categoryController = {};

categoryController.getOneCategory = (req, res, next) => {
  const { id } = req.params;
  const query = `
        SELECT *
        FROM categories
        WHERE category_id = '${id}'
    `;
  db.query(query)
    .then((result) => {
      res.locals.getOneCategory = result.rows[0];
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Error retrieving category from database',
        status: 400,
        message: { err: 'An error occurred' },
      });
    });
};

categoryController.getAllCategory = (req, res, next) => {
  const query = `
      SELECT * 
      FROM categories
    `;

  db.query(query)
    .then((result) => {
      res.locals.getAllCategory = result.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Error retrieving category from database',
        status: 400,
        message: { err: 'An error occurred' },
      });
    });
};

categoryController.createCategory = (req, res, next) => {
  const { user_id, category_name } = req.body;

  const params = [user_id, category_name];
  const query = `
        INSERT INTO categories (user_id, category_name)
        VALUES ($1, $2)
        RETURNING (category_id)
    `;

  db.query(query, params)
    .then((result) => {
      res.locals.category_id = result.rows[0].category_id
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Error retrieving category from database',
        status: 400,
        message: { err: 'An error occurred' },
      });
    });
};

categoryController.updateCategory = (req, res, next) => {
  const { id } = req.params;

  // below is our way of dealing with the fact that you dont
  // know how many update fields will be coming in
  // could be to update 1 field, could be to update 7 fields

  const fields = Object.entries(req.body);

  // setFields will be what we pass into SET field of SQL Update Query
  const setFields = [];

  // iterate through fields to create structure for SQL query and push into setFields
  for (const field of fields) {
    setFields.push(`${field[0]} = '${field[1]}'`);
  }

  //turn setFields array into string for SQL query

  const query = `
  UPDATE categories
  SET ${setFields.join(', ')}
  WHERE categories_id = '${id}'
  `;
  db.query(query)
    .then((result) => {
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Error retrieving job from database',
        status: 400,
        message: { err: 'An error occurred' },
      });
    });
};

categoryController.deleteCategory = (req, res, next) => {
  const { id } = req.params;

  const query = `
      DELETE FROM categories
      WHERE category_id = '${id}'
    `;

  db.query(query)
    .then((result) => {
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Error retrieving category from database',
        status: 400,
        message: { err: 'An error occurred' },
      });
    });
};

module.exports = categoryController;

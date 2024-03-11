const db = require('../models/jobModels');

const jobController = {};

jobController.getOneJob = (req, res, next) => {
  const { id } = req.params;
  const query = `
        SELECT *
        FROM listings
        WHERE listing_id = '${id}'
        `;

  db.query(query)
    .then((result) => {
      res.locals.getOneJob = result.rows[0];
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

jobController.getAllJobs = (req, res, next) => {
  const query = `
  SELECT listings.*,categories.*, users.user_id FROM listings
  INNER JOIN categories ON listings.category_id = categories.category_id
  INNER JOIN users ON categories.user_id = users.user_id
  `;

  db.query(query)
    .then((result) => {
      res.locals.getAllJobs = result.rows;

      return next();
    })
    .catch((err) => {
      return next({
        log: 'Error retrieving jobs from database',
        status: 400,
        message: { err: 'An error occurred' },
      });
    });
};

jobController.createJob = (req, res, next) => {
  // destructure what we need from req.body
  const { job_role_name, company_name, details, date_applied, category_id } =
    req.body;
  const status = 'status'
  // put destructured content into a params array to be passed into .query method
  const params = [
    job_role_name,
    company_name,
    details,
    date_applied,
    category_id,
    status,
  ];

  const query = `
    INSERT INTO listings (job_role_name, company_name, details, date_applied, category_id, status)
    VALUES ($1, $2, $3, $4, $5, $6)
  `;

  console.log(query);
  console.log(params);
  db.query(query, params)
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

jobController.updateJob = (req, res, next) => {
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
  UPDATE listings
  SET ${setFields.join(', ')}
  WHERE listing_id = '${id}'
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

  return next();
};

jobController.deleteJob = (req, res, next) => {
  const { id } = req.params;

  const query = `
      DELETE FROM listings
      WHERE listing_id = '${id}'
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

module.exports = jobController;

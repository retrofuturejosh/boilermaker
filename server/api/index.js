const router = require('express').Router();

//EXAMPLE ROUTE
router.use('/exampleRoute', require('./exampleRoute')); // matches all requests to /api/users/

//ERROR HANDLING
router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
  });

module.exports = router;
const router = require('express').Router();

// matches GET requests to /api/SOMETHING/
router.get('/', function (req, res, next) { /* etc */});

// matches POST requests to /api/SOMETHING/
router.post('/', function (req, res, next) { /* etc */});

// matches PUT requests to /api/SOMETHING/:SOMETHINGId
router.put('/:SOMETHINGId', function (req, res, next) { /* etc */});

// matches DELTE requests to /api/SOMETHING/:SOMETHINGId
router.delete('/:SOMETHINGId', function (req, res, next) { /* etc */});

module.exports = router;
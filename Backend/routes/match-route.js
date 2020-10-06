const express = require('express');

const matchesControllers = require('../controllers/matches-controllers');

const router = express.Router();

router.get('/', matchesControllers.getMatches );
router.post('/match', matchesControllers.createMatch);
router.delete('/match/:mid', matchesControllers.deleteMatch);

module.exports = router;
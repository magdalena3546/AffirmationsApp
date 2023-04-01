const express = require('express');
const router = express.Router();
const AffirmationController = require('../controllers/affirmations.controller');

router.get('/affirmations', AffirmationController.getAll);
router.get('/affirmations/:id', AffirmationController.getOne);
router.get('/affirmation', AffirmationController.getRandom);
router.post('/affirmations', AffirmationController.add);
router.delete('/affirmations/:id', AffirmationController.delete);

module.exports = router;
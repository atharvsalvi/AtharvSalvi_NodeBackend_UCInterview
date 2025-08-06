const express = require('express')
const router = express.Router();
const showControllers = require('../controllers/showControllers.js')

router.get('/show-details', showControllers.getShowDetails)
router.get('/episodes', showControllers.getEpisodeDetails)

module.exports = router;

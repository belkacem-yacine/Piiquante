const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const saucesControllers = require('../controllers/sauces');

router.post('/', auth, multer, saucesControllers.createSauce);
router.put('/:id', auth, multer, saucesControllers.modifySauce);
router.delete('/:id', auth, saucesControllers.deleteSauce);
router.get('/:id', auth, saucesControllers.getOneSauce );
router.get('/', auth, saucesControllers.getAllSauces );

module.exports = router;
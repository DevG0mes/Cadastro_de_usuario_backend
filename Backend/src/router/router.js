const express = require('express');
const userController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddleware');
const router = express.Router();

router.get('/usuario', userController.userGetAll);
router.post('/inserir', userMiddleware.validateBody, userController.insertuser);
router.put('/update/:id', userMiddleware.validateBody, userController.Updateduser);
router.delete('/delete/:id', userController.deleteuser);

module.exports = router;
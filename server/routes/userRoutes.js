const express = require('express');
// import functions
const { getUsers, createUser, updateUser, deleteUser, loginUser, } = require('../controllers/userController');

const router = express.Router();


// Combination  
router.route('/').get(getUsers).post(createUser);

router.route('/:id').put(updateUser).delete(deleteUser);

// Add login route
router.post('/login', loginUser);

module.exports = router;
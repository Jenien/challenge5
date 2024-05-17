const express = require('express');
const router = express.Router();
const { loginAdmin, createAdmin, authenticate } = require('../controllers/auth.controllers');
const verifyToken = require('../middlewares/verifyToken');
const verifyAdmin = require('../middlewares/verifyAdmin');


router.post('/admin/login', loginAdmin);
router.post('/admin/register', createAdmin);


module.exports = router;

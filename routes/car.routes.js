const express = require('express');
const router = express.Router();
const { getAllCars, getCarById, getCarsByType, createCar, updateCar, deleteCar } = require('../controllers/car.controllers');
const { upload } = require('../libs/multer');
const verifyToken = require('../middlewares/verifyToken');
const verifyAdmin = require('../middlewares/verifyAdmin');

// Menetapkan rute menggunakan metode router langsung
router.get('/show', getAllCars);
router.get('/show/:id', getCarById);
router.get('/show/type/:type', getCarsByType);

// Menambahkan middleware verifyToken dan verifyAdmin pada rute yang memerlukan hak akses admin
router.post('/add', verifyToken, verifyAdmin, upload, createCar);
router.put('/edit/:id', verifyToken, verifyAdmin, upload, updateCar);
router.delete('/delete/:id', verifyToken, verifyAdmin, deleteCar);

module.exports = router;

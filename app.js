require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const { PORT } = process.env;
const router = require('./routes/index.routes');
const prisma = require('./libs/prisma');


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/api', router);


app.set('view engine', 'ejs');

// Routing untuk halaman root
app.get('/', (req, res) => {
    res.render('sign-in');
});
app.get('/dashboard', async (req, res) => {
    try {
      const cars = await prisma.car.findMany(); 
      res.render('dashboardd', { cars }); 
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  app.get('/add-car', (req, res) => {
    res.render('add-car.ejs'); 
});

app.get('/list', async (req, res) => {
  try {
    const cars = await prisma.car.findMany(); 
    res.render('list-car', { cars }); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/edit-cars/:id', async (req, res) => {
  try {
    const carId = parseInt(req.params.id);
    const car = await prisma.car.findUnique({
      where: {
        id: carId,
      },
    });
    if (!car) {
      return res.status(404).send('Car not found');
    }
    res.render('edit-cars.ejs', { car: car }); 
  } catch (error) {
    console.error('Error fetching car data:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/show/:id', async (req, res) => {
  try {
    const carId = parseInt(req.params.id);
    const car = await prisma.car.findUnique({
      where: {
        id: carId,
      },
    });
    if (!car) {
      return res.status(404).send('Car not found');
    }
    res.render('view-car', { car }); 
  } catch (error) {
    console.error('Error fetching car data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.use(express.static('public'));
app.use(express.static('views'));
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

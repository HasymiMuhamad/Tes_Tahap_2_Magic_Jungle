const express = require('express'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  
  homeRoute = require('./routes/home'),
  kategoriRoute = require('./routes/kategori'),
  transaksiRoute = require('./routes/transaksi')


require('dotenv/config');

// init app
const app = express();

// connecting to mongoDB
const URL = process.env.URL;
mongoose.connect(URL, { useNewUrlParser: true, useCreateIndex: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


// cors setup
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'showcase is coming......'
  });
});



// initialize routes
app
  .use('/home', cors(),  homeRoute)
  .use('/kategori', cors(),  kategoriRoute)
  .use('/transaksi', cors(),  transaksiRoute)
 

// error handling middleware
// app.use(errors.error);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is starting and running at port ${PORT}`);
});

module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const userRouter = require('./routes/userRouter');
const expediaRouter = require('./routes/expediaRouter');
const authRouter = require('./routes/authRouter');
const authentication = require('./middleware/authentication');
const session = require('express-session');

const app = express();
const Flight = require('./flight');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: true,
  saveUninitialized: true,
}));

app.use(morgan('dev'));

app.use('/api', authentication);
app.use('/api', authRouter);
app.use('/api/users', userRouter);
app.use('/api/flights', expediaRouter);

app.get('/flight/:date/:location/:arrival', (request, response) => {
 const flightBot = new Flight();
 flightBot.getFlight( request.params.date, request.params.location, request.params.arrival)
 .then((flightData) => {
   response.status(200).send(flightData)
   });
});

module.exports = app;

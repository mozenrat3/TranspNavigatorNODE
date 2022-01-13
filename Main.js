const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userRouter = require('./src/routes/userRouter');
const reviewRouter = require('./src/routes/reviewRouter');
const stopRouter = require('./src/routes/stopRouter');
const transportRouter = require('./src/routes/transportRouter');
const routeRouter = require('./src/routes/routeRouter');
const timetableRouter = require('./src/routes/timetableRouter');

app.use('/user',userRouter);
app.use('/reviews',reviewRouter);
app.use('/stops',stopRouter);
app.use('/transports',transportRouter);
app.use('/routes',routeRouter);
app.use('/timetables',timetableRouter);


app.listen(3000, () => {
    console.log('server: start listening');
});



const express = require('express');
const app = express();
const passport = require('./src/passport');
const fs = require('fs');

const logs = require('./src/middleware/httpLog');

const swaggerUi = require('swagger-ui-express');
//const swaggerFile = JSON.parse(fs.readFileSync('./src/swagger/output.json'))
const swaggerFile = require('./src/swagger/output.json');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use(logs);

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

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.listen(3000, () => {
    console.log('server: start listening');
});



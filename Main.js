const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userRouter = require('./src/routes/userRouter');

app.use('/user',userRouter);


app.listen(3000, () => {
    console.log('server: start listening');
});



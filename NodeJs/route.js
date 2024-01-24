const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


//middlewares
const logger = require('./middlewares/logger');
const autorization = require('./middlewares/authorization');
app.use(logger);
 
const { indexRoutes, userRoutes } = require('./routes')

app.use('/', indexRoutes);
app.use('/users', autorization ,userRoutes);

app.listen(port, ()=>{
    console.log(`App is running on :${port}`);
});

module.exports = app;
const express = require('express');
const app = express();
require('./env');
const port = 3000;

app.use(express.json());


//middlewares
const logger = require('./middlewares/logger');
const authorization = require('./middlewares/authorization');
const handleError = require('./middlewares/errorHandler');
app.use(logger);

const { indexRoutes, userRoutes, todoRoutes } = require('./routes');

app.use('/', indexRoutes);
app.use('/users', authorization ,userRoutes);
app.use('/todos', todoRoutes);

app.use(handleError); // global error handler. it should be at the end here.

app.listen(port, ()=>{
    console.log(`App is running on :${port}`);
});

module.exports = app;
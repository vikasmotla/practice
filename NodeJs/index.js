const express = require('express');
const app = express();

app.use(middleware);

app.use('/', indexRoutes);

app.get('/');

app.listen(port, callback);
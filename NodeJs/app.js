const express = require('express');
const app = express();
// const bodyParser = require('body-parser'); // we dont have to use this, since express.json is same.
const port = 3000;

app.use(express.json()); // why to use this? => Parse data that is sent in request body. it allows req.body.
// app.use(bodyParser.json());

app.get('/', (req, res)=>{
    console.log(req.params); //  pass url as /10   for this write app.get('/:id')
    console.log(req.query); // pass url as ?id=10
    console.log(req.body); // if we dont use express json, this will be undefined.
    res.send('Hello World!');
});

app.post('/post', (req, res)=>{
    console.log(req.body);
    res.json(req.body);
})

app.listen(port, ()=>{
    console.log(`App is running on :${port}`);
});
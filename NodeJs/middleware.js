const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let totolReq = 0;
const countRequests = (req, res, next)=>{
    totolReq+=1;
    next();
};
app.use(countRequests);


app.get('/', (req, res)=>{
    console.log(totolReq);
    res.json({count: totolReq})
})

const middleCount = (req, res, next) => {
    console.log(totolReq);
    next();
}

const otherMiddle = (req, res, next)=>{
    console.log(totolReq);
    next();
}

app.get('/one', middleCount ,(req, res)=>{
    console.log(totolReq);
    res.json({count: totolReq})
})

app.get('/many', [middleCount, otherMiddle] ,(req, res)=>{
    console.log(totolReq);
    res.json({many: totolReq})
})

app.listen(port, ()=>{
    console.log(`App is running on :${port}`);
});
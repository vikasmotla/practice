const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.json({msg: 'all users'})
})

router.get('/:id', (req, res)=>{
    console.log(req.params.id);
    res.json({msg: 'one user'})
})

router.post('/:id', (req, res)=>{
    console.log(req.params.id)
    res.json({msg: 'user created'})
})

router.put('/:id', (req, res)=>{
    console.log(req.params.id)
    res.json({msg: 'user updated'})
})

router.delete('/:id', (req, res)=>{
    console.log(req.params.id)
    res.json({msg: 'user deleted'})
})

module.exports = router;
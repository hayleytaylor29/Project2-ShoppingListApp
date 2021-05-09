const express = require('express');
const router = express.Router();
const List = require('../models/list.js');

router.get('/', (req, res) => {
    res.render('newDrug.ejs')
})

router.post('/', (req,res) => {
    console.log(req.body);
    List.create(req.body, (error, createdList) => {
        res.redirect('/');
        data: createdList;
    })
})

router.get('/:id', (req, res) => {
    List.findById(req.params.id, (err, getList) => {
        console.log(getList)
        res.render('show.ejs', {
            data: getList
        })
    })
})

module.exports = router;
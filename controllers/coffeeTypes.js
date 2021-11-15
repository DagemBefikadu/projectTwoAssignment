const express = require('express')
const router = express.Router()
let db = require('../models/')


router.get('/', (req,res) => {
    db.coffee.findAll()
    .then((coffeeTypes) => {
        res.render('coffee/coffeeTypes', {coffeeTypes: coffeeTypes})
    })
    .catch (error => {
        console.log(error)
    })
})

router.get('/:id', (req,res) => {
    db.coffee.findOne({
        where: {id: req.params.id}
    }).then((coffeeDescription) => {
        res.render('coffee/coffeeInfo', {coffeeDescription})
    }).catch (error => {
        console.log(error)
    })
})

module.exports = router
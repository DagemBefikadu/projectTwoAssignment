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

module.exports = router
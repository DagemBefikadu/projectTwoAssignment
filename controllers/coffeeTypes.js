const express = require('express')
const router = express.Router()
let db = require('../models')
const user = require('../models/user')



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
        db.comment.findAll({
            where: {coffeeId: req.params.id}
        })
        .then(foundComments => {
            res.render('coffee/coffeeInfo', {comments: foundComments, coffeeDescription})
        })
    }).catch (error => {
        console.log(error)
    })
})
// creating a favorite for the user
router.post('/:id',  (req,res) => {
    console.log('This should be the userId', res.locals.currentUser.id)
    console.log('This should be the coffeeId', req.params.id)
    
    db.userCoffee.findOrCreate({
        where:{ userId: res.locals.currentUser.id, coffeeId: req.params.id},
        defaults: {coffeeId: req.params.id, userId: res.locals.currentUser.id}
    })
    .then(favCoffee => {
        // user.addCoffee(favCoffee)
        console.log(`This is my favecoffee\n`, favCoffee)
        res.redirect('/profile')
    })
    .catch(error => {
        console.log(error)
    })
})

router.post('/:id/comments', (req,res) => {
    db.comment.create({
      userId: res.locals.currentUser.id,
      coffeeId: req.params.id,
      content: req.body.content,
    })
    .then(resPost => {
      console.log('created comment\n', resPost)
      res.redirect(`/coffees/${req.params.id}`)
    })
    .catch(error => {
        console.log(error)
    })
  })

    
module.exports = router
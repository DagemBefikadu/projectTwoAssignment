require('dotenv').config()
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const session = require('express-session')
const passport = require('./config/ppConfig')
const flash = require('connect-flash')
const isLoggedIn = require('./middleware/isLoggedIn')
const { get } = require('./controllers/auth')
let db = require('./models')



// views (ejs and layouts) set up
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// body parser middelware
app.use(express.urlencoded({extended:false}))

// session middleware
app.use(session({
    secret: process.env.SUPER_SECRET_SECRET,
    resave: false,
    saveUninitialized: true
}))

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// flash middleware (must go AFTER session middleware)
app.use(flash())

// custom middleware
app.use((req, res, next) => {
    // before every route, attach the flash messages and current user to res.locals
    res.locals.alerts = req.flash();
    res.locals.currentUser = req.user;
    next()
})

// controllers middleware 
app.use('/auth', require('./controllers/auth'))
app.use('/coffees', require('./controllers/coffeeTypes'))


// home route
app.get('/', (req, res)=>{
    res.render('home')
})

// profile route


app.get('/profile', isLoggedIn, (req, res) => {
    console.log('This should be the userId', res.locals.currentUser.id)
    db.user.findOne({
        where:{ id: res.locals.currentUser.id}
    })
    .then((coffee) => {
        coffee.getCoffees()
        .then(fav => res.render('profile', {coffee: fav})) 
        console.log('This should be the favorited Coffee',coffee)
    })
    .catch (error => {
        console.log(error)
    })
})




app.listen(3000, ()=>{
    console.log(`process.env.SUPER_SECRET_SECRET ${process.env.SUPER_SECRET_SECRET}`)
    console.log("auth_practice running on port 3000")
})
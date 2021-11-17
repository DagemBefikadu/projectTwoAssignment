#projectTwoAssignment




  <h4> Description:
            <h6>
                <%= coffee.description %>
            </h6>
        </h4>
        <h5> Process:
            <h6>
                <%= coffee.process %>
            </h6>
        </h5>
        <h4> Origin:
               <small> <%= coffee.origin %></small>
        </h4>
    </div>





    


app.get('/profile', (req,res) => {
    db.userCoffee.findAll({
        where:{ userId: res.locals.currentUser.id},
        include: [db.coffee, db.user]
    })
    .then((coffeeFavs) => {
        res.render('profile', {coffeeFavs: coffeeFavs})
    })
    .catch (error => {
        console.log(error)
    })
})


      models.userCoffee.hasMany(models.coffee)
      models.userCoffee.belongsTo(models.user)

            models.user.belongsToMany(models.coffee, { through: "userCoffee" });
                  models.user.belongsToMany(models.coffee, { through: "userCoffee" });
                  12345678
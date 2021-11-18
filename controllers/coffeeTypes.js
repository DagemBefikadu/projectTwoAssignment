const express = require("express");
const isLoggedIn = require("../middleware/isLoggedIn");
const router = express.Router();
let db = require("../models");
const user = require("../models/user");

router.get("/", (req, res) => {
  db.coffee
    .findAll()
    .then((coffeeTypes) => {
      res.render("coffee/coffeeTypes", { coffeeTypes: coffeeTypes });
    })
    .catch((error) => {
      console.log(error);
    });
});

//This retrieves decription and process of coffee
//This is all finds the comments in the data base
router.get("/:id", (req, res) => {
  db.coffee
    .findOne({
      where: { id: req.params.id },
    })
    .then((coffeeDescription) => {
      db.comment
        .findAll({
          where: { coffeeId: req.params.id },
        })
        .then((foundComments) => {
          res.render("coffee/coffeeInfo", {
            comments: foundComments,
            coffeeDescription,
          });
        });
    })
    .catch((error) => {
      console.log(error);
    });
});
// creating a favorite for the user
router.post("/:id", (req, res) => {
  console.log("This should be the userId", res.locals.currentUser.id);
  console.log("This should be the coffeeId", req.params.id);

  db.userCoffee
    .findOrCreate({
      where: { userId: res.locals.currentUser.id, coffeeId: req.params.id },
      defaults: { coffeeId: req.params.id, userId: res.locals.currentUser.id },
    })
    .then((favCoffee) => {
      // user.addCoffee(favCoffee)
      console.log(`This is my favecoffee\n`, favCoffee);
      res.redirect("/profile");
    })
    .catch((error) => {
      console.log(error);
    });
});
//where comments are being created
router.post("/:id/comments", (req, res) => {
  db.comment
    .create({
      userId: res.locals.currentUser.id,
      name: req.body.name,
      coffeeId: req.params.id,
      content: req.body.content,
    })
    .then((resPost) => {
      console.log("created comment\n", resPost);
      res.redirect(`/coffees/${req.params.id}`);
    })
    .catch((error) => {
      console.log(error);
    });
});

//GET UPDATE FORM
router.get("/edit/:id/comments", (req, res) => {
  db.comment
    .findOne({
      //this auto fills the form
      userId: res.locals.currentUser.id,
      id: req.params.id,
    })
    .then((updateCom) =>
      res.render("coffee/editCoffee", {
        newComment: updateCom.content,
        commentId: req.params.id,
      })
    );
});

//UPDATE A comments
router.put("/edit/:id/comments", (req, res) => {
  db.comment
    .findOne({
      userId: res.locals.currentUser.id,
      id: req.params.id,
    })
    .then((updatedPost) => {
      console.log("created comment\n", updatedPost);
      console.log(req.body);
      updatedPost
        .update({
          content: req.body.content,
        })
        .then(res.redirect(`/coffees/${req.params.id}`));
    })
    .catch((error) => {
      console.log(error);
    });
});

//Delete a comment
// router.delete("/:id/comments", (req, res) => {
//     console.log(req.body)
//   db.comment.destroy({
//       where:{
//       userId: res.locals.currentUser.id,
//       id: req.body.commentId
//     }
//     })
//     .then(res.redirect(`/coffees/${req.params.id}`))
//     .catch((error) => {
//       console.log(error);
//     });
// });

router.delete("/:id/comments", isLoggedIn,(req, res) => {
    //     console.log(req.body)

    db.comment.destroy({
        where: {id: req.params.id,}
    })
    .then(numRowsDeleted=>{
        console.log(numRowsDeleted)
        res.redirect(`/coffees`)
    })
    
        // destroy returns 1 if something is deleted and 0 if nothing happens
        // console.log('You deleted:  ', deletedItem)
        
    .catch(error => {
        console.log(error)
    })
  })
  

module.exports = router;

var express = require("express");
const body = require('body-parser');
var urlencodedParser = body.urlencoded({ extended: false })
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get('/', (req, res) => {
    res.send('Hello World!');
    console.log(req);
    // console.log(res);
})

router.post("/", urlencodedParser,(req, res) => {
    res.send("Mic check!");
    console.log(req.body);
})

router.post("/home", (req, res) => {
    res.send("yo!");
    console.log(req.body);
})

// CRUD = get, post, update, delete
// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//     cat.all(function(data) {
//       var hbsObject = {
//         cats: data
//       };
//       console.log(hbsObject);
    //   res.render("index", hbsObject);
//     });
//   });










// Export routes for server.js to use.
module.exports = router;
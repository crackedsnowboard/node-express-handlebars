var express = require("express");
const body = require('body-parser');
var urlencodedParser = body.urlencoded({ extended: false })
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.selectAll(function(data) {
        var hbsObject = {
          burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });
    });

router.post("/api/burgers", (req, res) => {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({ id: result.insertID})
    })
    // console.log(req.body);
})

router.put("/api/devour/:id", (req, res) => {
    var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});
    
// Export routes for server.js to use.
module.exports = router;
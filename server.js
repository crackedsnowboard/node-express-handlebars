const express = require('express')
const app = express()
const port = 3000


var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

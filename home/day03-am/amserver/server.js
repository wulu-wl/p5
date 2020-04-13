let express = require("express");
let app = express();

app.get("/getname", function (req, res) {
    res.send(`a({ "name": "gao" })`)

})

app.listen(3000)
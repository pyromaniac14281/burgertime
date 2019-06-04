const express = require("express")
const bodyParser = require("body-parser")
const methodOverride = require("method-override")


const PORT = process.env.PORT || 3000

const app = express()

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(methodOverride("_method"));

const exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

let routes = require("./controllers/burgers_controller.js")

app.use(routes)

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT)
})
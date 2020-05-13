const http = require("http");
const express = require("express");
const env = require("dotenv");
const handlebars = require("express-handlebars");
const controlador = require("./routes/controlador.js");
const handlers_ln = require("./lib/handlers/handlers_ln.js");


const port = process.env.PORT || 3000;

const app = express();

env.config();

app.engine(
	"handlebars",
	handlebars({
		defaultLayout: "principal",
	})
);

app.set("view engine", "handlebars");

app.use(
	express.urlencoded({
		extended: false,
	})
);

app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.use("/", controlador);


app.use(handlers_ln.atiende404);

app.use(handlers_ln.atiende500);

app.listen(port, () => console.log("Escuchando..."));
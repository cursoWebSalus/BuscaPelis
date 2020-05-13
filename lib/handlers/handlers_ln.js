const handlers_mod = require("./handlers_mod.js");
const path = require("path");

exports.inicio = (req, res) => {
	res.sendFile("index.html", { root: path.join(__dirname, "../../public") });
};

exports.buscaPorTexto = async (req, res)=>{
	let datos = await handlers_mod.buscaPorTexto(req.params.texto);
	res.json(datos);
}

exports.buscaPorPais = async (req, res)=>{
	let datos = await handlers_mod.buscaPorPais(req.params.paises);
	res.json(datos);
}

exports.buscaPorReparto = async (req, res)=>{
	let datos = await handlers_mod.buscaPorReparto(req.params.reparto);
	console.log(datos);
	res.json(datos);
}

exports.buscaPorGenero = async (req, res)=>{
	let datos = await handlers_mod.buscaPorGenero(req.params.genero);
	res.json(datos);
}


exports.atiende404 = (req, res) => {
	//let url = "http://" + req.hostname + ":" + port + req.path;
	let url = `${req.protocol}://${req.hostname}:${req.app.get("port")}${
		req.path
	}`;
	res.status(404);
	res.render("404", { url: url });
};

exports.atiende500 = (err, req, res, next) => {
	res.status(500);
	res.render("500", { error: err.message });
};
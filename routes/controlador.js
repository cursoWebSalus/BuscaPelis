const express = require("express");
const controlador = express.Router();

const handlers_ln = require("../lib/handlers/handlers_ln.js");

controlador.get("/", handlers_ln.inicio);


controlador.get("/buscaPorTexto/:texto", handlers_ln.buscaPorTexto);

controlador.get("/buscaPorPais/:paises", handlers_ln.buscaPorPais);

controlador.get("/buscaPorReparto/:reparto", handlers_ln.buscaPorReparto);

controlador.get("/buscaPorGenero/:genero", handlers_ln.buscaPorGenero);

module.exports = controlador;
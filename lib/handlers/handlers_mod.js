const bd = require("mongodb");

exports.buscaPorTexto= async(texto) =>{

	let cursor;
	let salida;
	try {
		conn = await require("../conn.js");
		let movies = await conn.db("sample_mflix").collection("movies");
		cursor = await movies.find({$text: {$search: texto}}, {projection: {"title": 1, "_id": 0}});

	} catch(err){
		console.error(`No se pudo completar la búsqueda debido a: ${error}` );
		return [];
	} finally {
		salida = await cursor.toArray();
		await cursor.close();
	}

	return salida;
}


exports.buscaPorPais = async(paises) =>{

	let cursor;
	let salida;
	try {
		conn = await require("../conn.js");
		let movies = await conn.db("sample_mflix").collection("movies");
		const paisesVector = Array.isArray(paises)?paises: paises.split(",");
		cursor = await movies.find({"countries": {$in: paisesVector}}, {projection: {"title": 1, "_id": 0}});

	} catch(err){
		console.error(`No se pudo completar la búsqueda debido a: ${error}` );
		return [];
	} finally {
		salida = await cursor.toArray();
		await cursor.close();
	}

	return salida;
}

exports.buscaPorReparto = async(reparto) =>{

	let cursor;
	let salida;
	try {

		conn = await require("../conn.js");
		let movies = await conn.db("sample_mflix").collection("movies");
		const repartoVector = Array.isArray(reparto)?reparto: reparto.split(",");
		cursor = await movies.find({"cast": {$in: repartoVector}}, {projection: {"title": 1, "_id": 0}});

	} catch(err){
		console.error(`No se pudo completar la búsqueda debido a: ${error}` );
		return [];
	} finally {
		salida = await cursor.toArray();
		await cursor.close();
	}

	return salida;
}

exports.buscaPorGenero = async(genero) =>{

	let cursor;
	let salida;
	try {
		conn = await require("../conn.js");
		let movies = await conn.db("sample_mflix").collection("movies");
		const generoVector = Array.isArray(genero)?genero: genero.split(",");
		cursor = await movies.find({"genres": {$in: generoVector}}, {projection: {"title": 1, "_id": 0}});

	} catch(err){
		console.error(`No se pudo completar la búsqueda debido a: ${error}` );
		return [];
	} finally {
		salida = await cursor.toArray();
		await cursor.close();
	}

	return salida;
}

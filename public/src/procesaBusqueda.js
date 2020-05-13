async function busquedaPelis() {
	let resultado;
	let terminos = document.getElementById("id_text_search").value;
	if (document.getElementById("id_text").checked) {
		resultado = await fetch(`http://localhost:3000/buscaPorTexto/${terminos}`);
	} else if (document.getElementById("id_countries").checked) {
			resultado = await fetch(`http://localhost:3000/buscaPorPais/${terminos}`);
		} else if (document.getElementById("id_genre").checked) {
				resultado = await fetch(`http://localhost:3000/buscaPorGenero/${terminos}`);
			} else if (document.getElementById("id_cast").checked) {
					resultado = await fetch(`http://localhost:3000/buscaPorReparto/${terminos}`);
			}
	let resultadoJson = await resultado.json();
	let template = Handlebars.templates.muestraBusqueda;
	document.getElementById("resultados").innerHTML = template({pelis: resultadoJson});
}

document.getElementById("id_search").addEventListener("click", busquedaPelis);
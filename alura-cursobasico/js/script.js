var table = document.querySelector("table");
var butaoAdicionar = document.querySelector("#adicionar-paciente");

function definirNovoPaciente(paciente){
	return "<tr class='paciente'>" + 
				"<td class='info-nome'>" + paciente.nome + "</td>" + 
				"<td class='info-peso' id='peso-2'>" + paciente.peso +"</td> "+
				"<td class='info-altura' id='altura-2'>"+ paciente.altura +"</td> " +						
				"<td class='info-imc' id='imc-2'></td>" +
			"</tr>";	
}

function definirCampos(form){
	
	var nome = ;
	var peso = ;
	var altura = ;
	
	var paciente = {
		'nome' : nome,
		'peso' : peso,
		'altura' : altura
	}

	return paciente;
}

butaoAdicionar.addEventListener("click", function(event){
	
	event.preventDefault();

	var novoPaciente = definirCampos(document.getElementByTag("form"));

	table.innerHTML = table.innerHTML + definirNovoPaciente(novoPaciente);
});
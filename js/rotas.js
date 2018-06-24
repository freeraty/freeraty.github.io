//
var amigavel = true;
var rota = ".html";

	if (amigavel == true) {
		var rota = "";
		console.log('urls amigáveis habilitadas no sistema: index'+rota);
	}
		else{
			console.log('index'+rota);
		}

function vaiPara($link){
	pagina = $link+rota;
	console.log(pagina);
}
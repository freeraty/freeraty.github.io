//
var online = navigator.onLine; // true ou false, (há, não há conexão à internet)
if(online) {
    // efetuar pedido ajax
}

// verifica se página responde

 function ping(){ // Verifica se é possível usar urls amigáveis testando um arquivo
       $.ajax({
          url: 'testUrl',
          success: function(result){
             var amigavel = true;
          },     
          error: function(result){
              var amigavel = false;
          }
       });
    }

 ping();

var online = navigator.onLine;
    console.log(online);


var rota = "" //".html"; // Forçando urls amigáveis até solucionar problemas coma a funçao ping acima

	if (amigavel == true) {
		var rota = "";
		console.log('urls amigáveis habilitadas no sistema: index'+rota);
	}
		else{
			console.log('index'+rota);
		}

function vaiPara($link){
	pagina = $link+rota;
	window.location.href = pagina;
}
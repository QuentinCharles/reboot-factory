window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

	
	var input = document.getElementById("addInfo");
	var list = document.getElementById("maListe");	
	
	//si il y a quelque chose dans le local storage on l'affiche
	if ( localStorage['list'] ) {
		list.innerHTML = localStorage['list'];
	}
	
	//on valide le formulaire
	function addValueToList(event) {
		// récupérer ce qu'on a tapé dans l'input		
		var valeur = input.value;
		
		// si il y a du contenu...
		if ( valeur.length > 0 ) {
			// vider l'input
			input.value = "";
		
			// ajouter à la liste la valeur en question
			list.innerHTML += '<li>'+valeur+'</li>';
		
			//sauver le contenu
			localStorage['list'] = list.innerHTML;

		}
		
		// toujours remettre le focus dans le champs
		input.focus();
		
		// empêcher le formulaire d'envoyer sur une autre page (ou de recharger celle-ci)
		event.preventDefault();
	}
	
	

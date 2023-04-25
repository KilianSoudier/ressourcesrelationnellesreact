import { Component } from "react";

export default class FiltrerCategPost extends Component{
    toggleFiltre(){
        var divfiltre= document.getElementById("divfiltre")
        if(divfiltre.classList[0]==="hidden"){
            divfiltre.classList.remove("hidden")
        }
        else{
            divfiltre.classList.add("hidden")
        }
    };

    chargerCategories(){
        var listeDeroulante = document.getElementById("categories")
        //call a l'api
        var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
    
    fetch("http://localhost:5083/api/Categorie_Ressource", requestOptions)      
      .then(response => response.text())
      .then(result => 
      {
        result = JSON.parse(result)
        result.forEach(element => {
            //creation de la colonne :
        var option = document.createElement("option")
        option.textContent=element.nom_categorie
        option.id=element.id_categorie
        listeDeroulante.appendChild(option)
        });
      })
      .catch(error => {
        alert("Erreur lors du chargement des catégories du filtre, veuillez recharger la page, si le problème persiste, merci de nous contacter.")
      });
    }
    
    render(){
        return(
            <center className="max-w-6xl mx-auto px-4 py-8">
            <button onClick={this.toggleFiltre} className="bg-teal-600 mb-5 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded flex items-center">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1z" clip-rule="evenodd" />
                </svg>
                Filtrer
            </button>
            <div id="divfiltre" className='hidden'>
                <select id="categories" onClick={ this.chargerCategories } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5">
                    <option selected>Veuillez choisir la catégorie sur laquelle vous souhaitez filtrer les ressources.</option>
                </select>
            </div>
        </center>
        )
    }
}
import React from 'react'
import { Component } from "react";
import Cookies from 'universal-cookie';
  
export default class Stats extends Component{
  verifcookie(){
    const cookies = new Cookies();
    if(cookies.get("ResRelConId")=== undefined){
      alert("Veuillez vous connecter !")
      window.location.href = "/connexion"
    }
  }
  chargerCompteurVueRessourcesCroissant(){
    var contenuTableau=document.getElementById("ctnTableau")
    contenuTableau.innerHTML="";
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("http://localhost:5083/api/Ressources/", requestOptions)      
    .then(response => response.text())
    .then(result => 
    {
      document.getElementById("thead").classList.remove("hidden")
      result = JSON.parse(result)
      const objetsTries = result.sort((a, b) => a.compteur_vues - b.compteur_vues)
      console.log(objetsTries)

      for(var i = 0; i< objetsTries.length; i++){
        contenuTableau.innerHTML+='<tr class="bg-white border-b">'+
        '<th scope="row" class="px-t6 py-4 font-medium text-gray-900">'+
            objetsTries[i].titre+
        '</th>'+
        '<td class="px-6 mx-5 py-4">'+
            objetsTries[i].description+
        '</td>'+
        '<td class="px-6 mx-5 py-4">'+
            objetsTries[i].compteur_vues+
        '</td>'+
    '</tr>'
      }
    })
    .catch(error => {
        console.log(error)
      alert("Une erreur est survenue, veuillez recharger la page, si le problème persiste, merci de nous contacter pour nous signaler le problème.")
    });
    };
    chargerCompteurVueRessourcesDecroissant(){
        var contenuTableau=document.getElementById("ctnTableau")
        contenuTableau.innerHTML="";
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      fetch("http://localhost:5083/api/Ressources/", requestOptions)      
        .then(response => response.text())
        .then(result => 
        {
          document.getElementById("thead").classList.remove("hidden")
          result = JSON.parse(result)
          const objetsTries = result.sort((a, b) => b.compteur_vues - a.compteur_vues)
          console.log(objetsTries)
    
          for(var i = 0; i< objetsTries.length; i++){
            contenuTableau.innerHTML+='<tr class="bg-white border-b">'+
            '<th scope="row" class="px-t6 py-4 font-medium text-gray-900">'+
                objetsTries[i].titre+
            '</th>'+
            '<td class="px-6 mx-5 py-4">'+
                objetsTries[i].description+
            '</td>'+
            '<td class="px-6 mx-5 py-4">'+
                objetsTries[i].compteur_vues+
            '</td>'+
        '</tr>'
          }
        })
        .catch(error => {
            console.log(error)
          alert("Une erreur est survenue, veuillez recharger la page, si le problème persiste, merci de nous contacter pour nous signaler le problème.")
        });
    };

  render(){
    this.verifcookie()
    return(
      <>
          <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500">
                    <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
                        Nombre de vues par ressources :
                        <p class="mt-1 text-sm font-normal text-gray-500">
                            <button className='bg-teal-600 w-full mb-5 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded flex items-center' onClick={this.chargerCompteurVueRessourcesCroissant}>Trier par ordre croissant</button>
                            <button className='bg-teal-600 w-full mb-5 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded flex items-center' onClick={this.chargerCompteurVueRessourcesDecroissant}>Trier par ordre Décroissant</button>
                        </p>
                    </caption>
                    <thead id="thead" class="text-xs text-gray-700 uppercase bg-gray-50 hidden">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Titre
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Contenu
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Nombre de vues
                            </th>
                        </tr>
                    </thead>
                    <tbody id="ctnTableau">
                    </tbody>
                </table>
            </div>
          </div>
      </>
    );
  }
}

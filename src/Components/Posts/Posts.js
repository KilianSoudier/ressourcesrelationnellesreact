import React, { Component } from 'react'
export default class Posts extends Component {
    
    init(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch("http://localhost:5083/api/Ressources", requestOptions)      
        .then(response => response.text())
        .then(result => {
            result = JSON.parse(result)
            var div = document.getElementById("affichagePosts") 
            for(var i=0; i<result.length; i++){
                if(i>0){
                    div.innerHTML+='<div class="max-w-6xl mx-auto px-4 py-8">'+
                    '<div class="space-y-8">'+
                    '<div class="bg-white shadow-md rounded-lg overflow-hidden">'+
                    '<div class="w-full h-48 bg-gray-400">'+
                    '</div>'+
                    '<div class="p-4">'+
                    '<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#catégories</span>'+
                    '<h2 class="font-semibold text-gray-900 text-lg mb-2">'+result[i].titre+'</h2>'+
                    '<p class="text-gray-700 text-base">'+ result[i].description +'</p>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'
                }
                else{
                    div.innerHTML='<div class="max-w-6xl mx-auto px-4 py-8">'+
                    '<div class="space-y-8">'+
                    '<div class="bg-white shadow-md rounded-lg overflow-hidden">'+
                    '<div class="w-full h-48 bg-gray-400">'+
                    '</div>'+
                    '<div class="p-4">'+
                    '<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#catégories</span>'+
                    '<h2 class="font-semibold text-gray-900 text-lg mb-2">'+result[i].titre+'</h2>'+
                    '<p class="text-gray-700 text-base">'+ result[i].description +'</p>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'
                }
            }
        })
        .catch( err => {
              alert("Une erreur est survenue veuillez recharger la page. Si le problème persiste merci de nous recontacter.")
          })
      }


  render() {
    this.init()
    return(
    <>
        <div id="affichagePosts">
            <h1 className='text-red-700'>Erreur sur l'affichage des ressources</h1>
        </div>
        
    </>
    )
        
    

  }
}
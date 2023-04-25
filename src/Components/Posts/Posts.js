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
                    '<div class="w-full h-12 bg-teal-500">'+
                    '</div>'+
                    '<div class="p-4">'+
                    '<span class="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#catégories</span>'+
                    '<h2 class="font-semibold text-gray-900 text-lg mb-2">'+result[i].titre+'</h2>'+
                    '<p class="text-gray-700 text-base">'+ result[i].description +'</p>'+
                    '<button class="like-button" aria-label="Like">'+
                        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" class="w-6 h-6">'+
                            '<path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />'+
                        '</svg>'+
                    '</button>'+
                    '</div>'+
                    '<button class="text-gray-700 mb-2 ml-5 hover:underline hover:text-black">Ajouter un commentaire</button> '+
                    '<button class="text-gray-700 mb-2 ml-5 hover:underline hover:text-black">Voir les commentaires</button>'+
                    '</div>'+
                    '</div>'+
                    '</div>'
                }
                else{
                    div.innerHTML='<div class="max-w-6xl mx-auto px-4 py-8">'+
                    '<div class="space-y-8">'+
                    '<div class="bg-white shadow-md rounded-lg overflow-hidden">'+
                    '<div class="w-full h-12 bg-teal-500">'+
                    '</div>'+
                    '<div class="p-4">'+
                    '<span class="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#catégories</span>'+
                    '<h2 class="font-semibold text-gray-900 text-lg mb-2">'+result[i].titre+'</h2>'+
                    '<p class="text-gray-700 text-base">'+ result[i].description +'</p>'+
                    '<button class="like-button" aria-label="Like">'+
                        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" class="w-6 h-6">'+
                            '<path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />'+
                        '</svg>'+
                    '</button>'+
                    '</div>'+
                    '<button class="ml-5 mb-2 text-gray-700 hover:underline hover:text-black">Ajouter un commentaire</button>'+
                    '<button class="ml-5 mb-2 text-gray-700 hover:underline hover:text-black">Voir les commentaires</button>'+
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
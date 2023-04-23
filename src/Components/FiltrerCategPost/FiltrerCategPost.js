import { Component } from "react";

export default class FiltrerCategPost extends Component{
    toggleFiltre(){
        var divfiltre= document.getElementById("divfiltre")
        if(divfiltre.classList[0]=="hidden"){
            divfiltre.classList.remove("hidden")
        }
        else{
            divfiltre.classList.add("hidden")
        }
    };
    
    render(){
        return(
            <center className="max-w-6xl mx-auto px-4 py-8">
            <button onClick={this.toggleFiltre} class="bg-blue-500 mb-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
                <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1z" clip-rule="evenodd" />
                </svg>
                Filtrer
            </button>
            <div id="divfiltre" className='hidden'>
                <select id="categories" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected>Choisissez une catégorie</option>
                    <option value="categorie1">categorie1</option>
                    <option value="categorie2">categorie2</option>
                    <option value="categorie3">categorie3</option>
                    <option value="categorie4">categorie4</option>
                </select>
            </div>
        </center>
        )
    }
}
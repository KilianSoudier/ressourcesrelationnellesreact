import { Component } from "react";
import Cookies from 'universal-cookie';


export default class PosterPost extends Component{
    constructor(props){
        super(props);
        this.state= {
          id_user:new Cookies().get("ResRelConId"),
          titre:"",
          langueid_langue:1,//par défault Français
          languenom_langue:"français",
          date_moderation: "1980-01-01",
          description:"",
          age_minimum:18, //par défault pour adultes
          compteur_vues:0,
          Discriminator:"Texte", //par défault texte
          image_taille:null,
          taille: null,
          Texte_taille: null,
          Video_taille: null,
          test: null,
          categorie: ""
        }
        this.handleChangeTitre= this.handleChangeTitre.bind(this);
        this.handleChangeDesc= this.handleChangeDesc.bind(this);
        this.handleChangeAge= this.handleChangeAge.bind(this);
        this.handleChangeDiscriminator= this.handleChangeDiscriminator.bind(this);
        this.handleChangeCateg = this.handleChangeCateg.bind(this);
    
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeTitre(event){
      this.setState({titre: event.target.value})
    }
    handleChangeDesc(event) {    
      this.setState({description: event.target.value});
    }
    handleChangeAge(event) {    
      if(event.target.type==='checkbox'){
          if(event.target.checked)
            this.setState({age_minimum : 1})
          else
            this.setState({age_minimum : 18})
        }
    }
    handleChangeDiscriminator(event) {    
      this.setState({Discriminator: event.target.value});
    }

    handleChangeCateg(event){
      this.setState({categorie: event.target.value});
    }
    
    handleSubmit(event) {
      event.preventDefault();
      try{
        //-----------------Ajout de la ressource
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "id_ressources": null,
            "titre":this.state.titre,
            "langue":{
              // "id_langue":this.state.langueid_langue,
              "nom":this.state.languenom_langue
            },
            "date_moderation": this.state.date_moderation,
            "description": this.state.description,
            "age_minimum":this.state.age_minimum,
            "compteur_vue":this.state.compteur_vues,
            "discriminator": this.state.discriminator
      });
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("http://localhost:5083/api/Ressources", requestOptions)      
      .then(response => {
        var myHeaders2 = new Headers();
        myHeaders2.append("Content-Type", "application/json");
        var raw2 = JSON.stringify({
          // "id_trier_categories":null,
          "Categorie_Ressource": {
            "nom_categorie": this.state.categorie,
          }  ,
          "Ressources":{
            "id_ressource":null,
            "titre":this.state.titre,
            "langue":{
              "nom":"french"
            },
            "date_moderation":this.state.date_moderation,
            "validation_moderation": this.state.validation_moderation,
            "description": this.state.validation_moderation,
            "age_minimum":this.state.age_minimum,
            "compteur_vues":this.state.compteur_vues
          } 
        });
        var requestOptions2 = {
          method: 'POST',
          headers: myHeaders2,
          body: raw2,
          redirect: 'follow'
        };
      fetch("http://localhost:5083/api/Trier_Ressources_Categories", requestOptions2)      
        .then(response => response.text())    
    })
    }
      catch(e){
        alert("Une erreur est survenue ! Veuillez réessayer !")  
      }


      
    }
    verifcookie(){
      const cookies = new Cookies();
      if(cookies.get("ResRelConId")=== undefined){
        alert("Veuillez vous connecter !")
        window.location.href = "/connexion"
      }
    }

    ChargerCategoriesRessources(){
        var listeDeroulante = document.getElementById("categorieRessource")
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
        var msg = document.getElementById("msg_info")
        msg.className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
        msg.innerHTML="<span class=\"font-medium\">Connexion refusée !</span> Vos informations de connexion sont incorrectes."
      });
        
        
    }

    AfficherAjoutPost(){
      var cacherPoster=document.getElementById("cacherPoster");
      if(document.getElementById("title").value!==""){
          if(cacherPoster.classList[0]==="hidden"){
              cacherPoster.classList.remove("hidden")

          }
      }
      else{
          cacherPoster.classList.add("hidden")
      }
  }
  
  render(){
      this.verifcookie()
      return(
          <div className="max-w-6xl mx-auto px-4 py-8">
              <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" for="title">
              Ajouter un post
          </label>
          </div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST" action="/post">
          <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" for="title">
              Titre
          </label>
          <input onKeyUp={this.AfficherAjoutPost} value={this.state.titre} onChange={this.handleChangeTitre} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Entrez le titre du post" name="title" required />
          </div>
          <div id="cacherPoster" className="hidden">
              <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="content">
                  Contenu
              </label>
              <textarea value={this.state.description} onChange={this.handleChangeDesc} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="content" placeholder="Entrez le contenu du post" name="content" required></textarea>
              </div>
              <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="file_input">
                  Joindre un fichier (optionnel)
              </label>
              <input className="block w-full text-sm text-gray-500 accent-blue-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 last:focus:outline-none" id="file_input" type="file"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Choississez le type de ressource :</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="type">
                    <option value="text">Texte</option>
                    <option value="image">Image</option>
                    <option value="video">Vidéo</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="categorieRessource"> Choississez une catégorie pour cette ressource :
                    <select onClick={this.ChargerCategoriesRessources} onChange={this.handleChangeCateg} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="categorieRessource"></select>
                </label>
              </div>
              <div className="mb-4">
                <label for="age_minimum" className="block text-gray-700 font-bold mb-2">
                <input id="age_minimum" value={this.state.age_minimum} onChange={this.handleChangeAge} class="mr-5 w-4 h-4 text-blue-600 bg-gray-200 border-gray-400 rounded focus:ring-blue-500" type="checkbox"></input>
                    Adapté aux enfants (jusqu'à 18 ans) ?  
                </label>
              </div>
              <div className="flex items-center justify-center">
                <div id="msg_info"></div>
              <button onClick={ this.handleSubmit } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Publier
              </button>
              </div>
          </div>
      </form>
      </div>

      )
      
  }
}
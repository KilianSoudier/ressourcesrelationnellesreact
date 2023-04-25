import React from 'react'
import { Component } from "react";
import Cookies from 'universal-cookie';
  
export default class Profil extends Component{
  constructor(props){
    super(props);
    this.state= {
      id_user:new Cookies().get("ResRelConId"),
      nom:"",
      prenom:"",
      dateNaiss:"",
      nomJeuneFille: "",
      email:"",
      pseudo:"",
      tel:""
    }

    this.handleChangeId_user= this.handleChangeId_user.bind(this);
    this.handleChangeEmail= this.handleChangeEmail.bind(this);
    this.handleChangeMdp= this.handleChangeMdp.bind(this);
    this.handleChangeNom= this.handleChangeNom.bind(this);
    this.handleChangePrenom= this.handleChangePrenom.bind(this);
    this.handleChangeNomJeuneFille= this.handleChangeNomJeuneFille.bind(this);
    this.handleChangePseudo= this.handleChangePseudo.bind(this);
    this.handleChangeddn= this.handleChangeddn.bind(this);
    this.handleChangeTel= this.handleChangeTel.bind(this);
  }
  handleChangeId_user(id_user){
    this.setState({id_user: id_user});
  }
  handleChangeEmail(mdp) {    
    this.setState({mdp: mdp});
  }
  handleChangeMdp(email) {    
    this.setState({email: email});
  }
  handleChangeNom(event) {    
    this.setState({nom: event.target.value});
  }
  handleChangePrenom(event) {    
    this.setState({prenom: event.target.value});
  }
  handleChangeNomJeuneFille(event) {    
    this.setState({nomJeuneFille: event.target.value});
  }
  handleChangePseudo(event) {    
    this.setState({pseudo : event.target.value});
  }
  handleChangeddn(event) {    
    this.setState({dateNaiss: event.target.value});
  }
  handleChangeTel(event) {    
    this.setState({tel: event.target.value});
  }

  verifcookie(){
    const cookies = new Cookies();
    if(cookies.get("ResRelConId")=== undefined){
      alert("Veuillez vous connecter !")
      window.location.href = "/connexion"
    }
  }
  init(){
    if(this.state.nom===""){
      var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      fetch("http://localhost:5083/api/Utilisateurs/"+this.state.id_user, requestOptions)      
        .then(response => response.text())
        .then(result => 
        {
          result = JSON.parse(result)
          this.setState({id_user : result.id_user})
          this.setState({nom : result.nom})
          this.setState({prenom : result.prenom})
          this.setState({nomJeuneFille : result.nom_jeune_fille})
          this.setState({dateNaiss : result.date_naissance})
          this.setState({email : result.email})
          this.setState({tel : result.numero_telephone})
        })
        .catch(error => {
          console.log(error)
          alert("Une erreur est survenue, veuillez recharger la page. Si le problème persiste, merci de nous contacter pour signaler le problème !")
        });
    }
  }
  
  render(){
    this.verifcookie()
    return(
      <>
        <div className="max-w-4xl my-5 mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-white border border-gray-200 shadow">
          <div class="flex flex-col items-center pb-10">
          <img className="w-20 rounded-full" alt="Ressources Relationnelles" src={require("../Assets/profilDefault.png")} />
              <h5 class="mb-1 text-xl font-medium text-gray-900" id="profilNomPrenom">{this.state.nom+" "+this.state.prenom}</h5>
              <span class="text-sm text-gray-500">Date de naissance : {this.state.dateNaiss}</span><br />
              <span class="text-sm text-gray-500">Nom de jeune fille : {this.state.nomJeuneFille}</span><br />
              <span class="text-sm text-gray-500">Adresse Mail : {this.state.email}</span><br />
              <span class="text-sm text-gray-500">Pseudo : {this.state.pseudo}</span><br />
              <span class="text-sm text-gray-500">Numéro de téléphone : {this.state.tel}</span><br />
              <div class="flex mt-4 space-x-3 md:mt-6">
                  <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300">Modifier mes informations</a>
              </div>
          </div>
        </div>
        {this.init()}
      </>
    );
  }
}

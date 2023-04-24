import React from 'react'
import { Component } from "react";
import Cookies from 'universal-cookie';
  
export default class Profil extends Component{
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
  }
  verifcookie(){
    const cookies = new Cookies();
    if(cookies.get("ResRelConId")=== undefined){
      alert("Veuillez vous connecter !")
      window.location.href = "/connexion"
    }
  }
  init(){

  }

  render(){
    this.verifcookie()
    this.init()
    return(
      <>
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="title">
                Mon profil :
            </label>
          </div>
        </div>
      </>
    );
  }
}

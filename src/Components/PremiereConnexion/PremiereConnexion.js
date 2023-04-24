import React, { Component } from 'react'
import Cookies from 'universal-cookie';

export default class PremiereConnexion extends Component {

  constructor(props){
    super(props);
    this.state= {
      id_user:null,
      mail:'',
      mdp:'',
      nom : '',
      prenom : '',
      nom_jeune_fille : '',
      pseudo : '',
      ddn: '',
      tel: '',
      rgpd: 0,
      conditions: 0,
      getValue: false
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
    this.handleChangeRGPD= this.handleChangeRGPD.bind(this);
    this.handleChangeConditions= this.handleChangeConditions.bind(this);
    this.handleChangeGetValue= this.handleChangeGetValue.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeGetValue(){
    this.setState({getValue: true})
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
    this.setState({nom_jeune_fille: event.target.value});
  }
  handleChangePseudo(event) {    
    this.setState({pseudo : event.target.value});
  }
  handleChangeddn(event) {    
    this.setState({ddn: event.target.value});
  }
  handleChangeTel(event) {    
    this.setState({tel: event.target.value});
  }
  handleChangeRGPD(event) {   
    if(event.target.type==='checkbox'){
      if(event.target.checked)
        this.setState({rgpd : true})
      else
        this.setState({rgpd : false})
    }
  }
  handleChangeConditions(event) {    
    if(event.target.type==='checkbox'){
      if(event.target.checked)
        this.setState({conditions : true})
      else
        this.setState({conditions : false})
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    this.FinalisationInscription()
  }

  verifcookie(){
    const cookies = new Cookies();
    if(cookies.get("ResRelConId")=== undefined){
      alert("Veuillez vous connecter !")
      window.location.href = "/connexion"
    }
  }

  GetDonneesUser(){
    if(this.state.getValue===false){
      var cookies= new Cookies();
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      fetch("http://localhost:5083/api/Utilisateurs/"+ cookies.get('ResRelConId'), requestOptions)      
        .then(response => response.text())
        .then(result => 
        {
          result = JSON.parse(result)
          this.setState({mail : result.email})
          this.setState({mdp : result.mdp})
          this.handleChangeGetValue()
        })
        .catch(error => {
          alert("Une erreur est survenue, essayez de rafraichir la page.")
        });
    }
  }

  FinalisationInscription(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var id_user=+new Cookies().get("ResRelConId")
    console.log(id_user)
    console.log(this.state)
    
    var raw = JSON.stringify({
        "id_user": id_user,
        "pseudo": this.state.pseudo,
        "email": this.state.mail,
        "mdp": this.state.mdp,
        "date_naissance": this.state.ddn,
        "nom": this.state.nom,
        "nom_jeune_fille": this.state.nom_jeune_fille,
        "prenom": this.state.prenom,
        "langue": {
          "nom": "french"
        },
        "derniere_date_connexion": Date.now,
        "validation_rgpd": this.state.validation_rgpd,  //normalement validé
        "date_validation_rgpd": Date.now,
        "accord_confidentialite": this.state.accord_confidentialite,  //normalement validé
        "date_accord_confidentialite": Date.now,
        "numero_telephone": this.state.tel,
        "type_Utilisateur": {
          "nom": "utilisateur"
        }
      
    });
    var requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("http://localhost:5083/api/Utilisateurs/"+id_user, requestOptions)      
      .then(response => window.location.href = "/posts")
      .catch(error => {
        var msg = document.getElementById("msg_info")
        msg.className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
        msg.innerHTML="<span class=\"font-medium\">Une erreur est survenue !</span> Veuillez réessayer ultérieurement. Si le problème persiste, merci de contacter le support."
      });
  }

  render() {
    this.verifcookie()
    this.GetDonneesUser()
    return (
  <form onSubmit={this.handleSubmit}>
    <div onLoad={this.GetDonneesUser} className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-2xl font-bold mb-8">Premiere Connexion:</h1>
        <div className="mb-2 block">
          <label for="nom">
            Nom <span className='text-lg text-red-600'><b>*</b></span>
          </label>
          <input required={true} className='w-full mb-2 focus:ring-teal-500 focus:border-teal-500 rounded' id="nom" type="text" value={this.state.nom.value} onChange={this.handleChangeNom} placeholder="Entrez votre nom"/>
        </div>
        <div className="mb-2 block">
          <label for="prenom">
            Prénom <span className='text-lg text-red-600'><b>*</b></span>
          </label>
          <input required={true} className='w-full mb-2 focus:ring-teal-500 focus:border-teal-500 rounded' id="prenom" type="text" value={this.state.prenom.value} onChange={this.handleChangePrenom} placeholder="Entrez votre prénom" />
        </div>
        <div className="mb-2 block">
          <label for="nom-jeune-fille">
            Nom de jeune fille
          </label>
          <input className='w-full mb-2 focus:ring-teal-500 focus:border-teal-500 rounded' id="nom-jeune-fille" type="text" value={this.state.nom_jeune_fille.value} onChange={this.handleChangeNomJeuneFille} placeholder="Entrez votre nom de jeune fille"/>
        </div>
        <div className="mb-2 block">
          <label for="pseudo">
            Pseudo
          </label>
          <input className='w-full mb-2 focus:ring-teal-500 focus:border-teal-500 rounded' id="pseudo" type="text" value={this.state.pseudo.value} onChange={this.handleChangePseudo} placeholder="Entrez votre pseudo" />
        </div>
        <div className="mb-2 block">
          <label for="ddn">
            Date de naissance <span className='text-lg text-red-600'><b>*</b></span>
          </label>
          <input required={true} className='w-full focus:ring-teal-500 focus:border-teal-500 mb-2 rounded' id="ddn" type="date" value={this.state.ddn.value} onChange={this.handleChangeddn} placeholder="Entrez votre Date de naissance" />
        </div>
        <div className="mb-2 block">
          <label for="tel">
            Numéro de téléphone
          </label>
          <input className='w-full mb-2 focus:ring-teal-500 focus:border-teal-500 rounded' id="tel" type="text" value={this.state.tel.value} onChange={this.handleChangeTel} placeholder="Entrez votre numéro de téléphone" />
        </div>
        <div className="mb-2 block">
          <input id="conditions" required={true} value={this.state.conditions} onChange={this.handleChangeConditions} class="mr-5 w-4 h-4 text-teal-600 bg-gray-200 border-gray-400 rounded focus:ring-teal-500 focus:border-teal-500" type="checkbox"></input> <label for="conditions">Accepter nos <a href="/conditionutilisation" className="text-teal-600 hover:underline" target='_blank'>Conditions d'utilisation des données personnelles</a> <span className='text-lg text-red-600'><b>*</b></span></label>
        </div>
        <div className="mb-2 block">
          <input id="rgpd" required={true} value={this.state.rgpd} onChange={this.handleChangeRGPD} class="mr-5 w-4 h-4 text-teal-600 bg-gray-200 border-gray-400 rounded focus:ring-teal-500" type="checkbox"></input> <label for="rgpd">Accepter notre <a href="/politiqueConfidentialite" class="text-teal-600 hover:underline" target='_blank'>Politique de confidentialité</a> <span className='text-lg text-red-600'><b>*</b></span></label>
        </div>
        <div><span className='text-lg mb-2 text-red-600'><b>*</b></span> : Champs obligatoires</div>
        <div id="msg_info" className="hidden p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert"></div>
        <div className="flex items-center justify-center">
          <button className="bg-teal-500 w-full hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Valider
          </button>
        </div>
    </div>
    </form>
    )
  }
}

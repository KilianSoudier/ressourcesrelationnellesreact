import React, { Component, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default class Connexion extends Component {
  connexion(){
    var mail= document.getElementById("email1").value
    var pwd= document.getElementById("password1").value
    
    document.getElementById(mail)
    document.getElementById(pwd)

    if(mail != null && pwd != null){
      
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("http://localhost:5083/api/Utilisateurs/"+mail+", "+pwd, requestOptions)      
      .then(response => response.text())
      .then(result => 
      {
        result = JSON.parse(result)
        const cookies = new Cookies();
        cookies.set("ResRelConId", result.id_user)
        cookies.set('ResRelLangue', result.langue);
        
          if(result.nom ==="string"){
            window.location.href = "/premiereConnexion"
          }
          else{
            window.location.href = "/posts"
          }
      })
      .catch(error => {
        var msg = document.getElementById("msg_info")
        msg.className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
        msg.innerHTML="<span class=\"font-medium\">Connexion refusée !</span> Vos informations de connexion sont incorrectes."
      });
    }
  }

  render() {
    return (
<div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
  <div>
    <div className="mb-2 block">
      <label for="email1">Votre adresse mail :</label>
    </div>
    <input id="email1" type="email" className='w-full mb-2 rounded' placeholder="Votre adresse Email" required={true} />
  </div>
  <div>
    <div className="mb-2 block">
      <label for="password1">Votre mot de passe :</label>
    </div>
    <input id="password1" type="password" className='w-full mb-2 rounded' placeholder='Votre mot de passe' required={true}/>
  </div>
  <div id="msg_info" className="hidden p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert"></div>
  <button onClick={this.connexion} className="bg-blue-500 w-full shadow active:bg-blue-700 hover:bg-blue-600 my-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
      Se connecter
  </button>
  <div>
    <Link to="/inscription">
      <button className="bg-blue-500 shadow w-full focus:bg-blue-700 hover:bg-blue-600 my-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Pas de compte ? Inscrivez-vous maintenant</button>
    </Link>
  </div>
</div>
    )
  }
}

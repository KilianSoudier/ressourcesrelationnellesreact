import React from "react";
import { Link } from "react-router-dom";
export default class Inscription extends React.Component {
  verifMdp(){
    var pwd1=document.getElementById("password1")
    var pwd2=document.getElementById("password2")
    var msgPwd=document.getElementById("msgPwd")
    var btnins=document.getElementById("inscrire")

    if(pwd1.value===pwd2.value){
      pwd1.className="w-full rounded block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
      pwd2.className="w-full rounded block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
      msgPwd.innerText="Les mots de passes sont bien identiques"
      msgPwd.className="mt-2 text-xs text-green-600"
      btnins.removeAttribute("disabled")
    }
    else {
      pwd1.className="w-full rounded block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-red-600 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
      pwd2.className="w-full rounded block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-red-600 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
      msgPwd.innerText="Les mots de passes ne sont pas identiques"
      msgPwd.className="mt-2 text-xs text-red-600"
      if(!btnins.getAttribute("string"))
      btnins.setAttribute("disabled","")
    }
  }
  inscription(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
        "pseudo": "string",
        "email": document.getElementById("email1").value,
        "mdp": document.getElementById("password1").value,
        "date_naissance": Date.now,
        "nom": "string",
        "nom_jeune_fille": "string",
        "prenom": "string",
        "langue": {
          "nom": "french"
        },
        "derniere_date_connexion": Date.now,
        "validation_rgpd": true,
        "date_validation_rgpd": Date.now,
        "accord_confidentialite": true,
        "date_accord_confidentialite": Date.now,
        "numero_telephone": "string",
        "type_Utilisateur": {
          "nom": "utilisateur"
        }
      
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:5083/api/Utilisateurs", requestOptions)      
      .then(response => response.text())
      .then(result => 
        {var msg = document.getElementById("msg_info")
      msg.className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50"
      msg.innerHTML="<span class=\"font-medium\">L'inscription à été réussie!</span> Essayez de vous connecter en cliquant sur le bouton."
      })
      .catch(error => {
        var msg = document.getElementById("msg_info")
        msg.className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
        msg.innerHTML="<span class=\"font-medium\">Une erreur est survenue !</span> Veuillez réessayer ultérieurement. Si le problème continue, merci de contacter le support."
      });
  }
  render(){
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
          <input id="password1"  type="password" className='w-full mb-2 rounded' placeholder='Votre mot de passe' required={true}/>
          <p id="msgPwd" class="hidden mt-2 text-xs text-green-600">Vos mots de passes sont bien identiques.</p>
        </div>
        <div>
          <div className="mb-2 block">
            <label for="password1">Confirmez votre mot de passe :</label>
          </div>
          <input id="password2" onKeyUp={this.verifMdp} type="password" className='w-full mb-2 rounded' placeholder='Confirmez votre mot de passe' required={true}/>
          <p id="msgPwd" class="hidden mt-2 text-xs text-green-600">Vos mots de passes sont bien identiques.</p>
  
        </div>
        <div id="msg_info" class="hidden p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert"></div>
        <button disabled="" onClick={this.inscription} id="inscrire" className="w-full bg-blue-500 shadow active:bg-blue-700 hover:bg-blue-600 my-2 disabled:bg-blue-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
            S'inscrire
          </button>
        <div>
        <Link to="/connexion">
          <button className="bg-blue-500 w-full shadow active:bg-blue-700 hover:bg-blue-600 my-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Vous avez déjà un compte ? Connectez vous</button>
        </Link>
        </div>
  
      </div>
     );
    }
  }
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Connexion extends Component {
  render() {
    return (
        <form className="flex flex-grow border-red flex-col gap-4 m-5">
  <div>
    <div className="mb-2 block">
      <label for="email1">Votre adresse mail :</label>
    </div>
    <input id="email1" type="email" className='w-full rounded' placeholder="Votre adresse Email" required={true} />
  </div>
  <div>
    <div className="mb-2 block">
      <label for="password1">Votre mot de passe :</label>
    </div>
    <input id="password1" type="password" className='w-full rounded' placeholder='Votre mot de passe' required={true}/>
  </div>
  <div>
  <Link to="/inscription">
    <button className="bg-blue-500 shadow focus:bg-blue-700 hover:bg-blue-600 my-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Pas de compte ? Inscrivez-vous maintenant</button>
  </Link>
    {/* <p>Vous n'avez pas de compte ?</p> <a onClick={firePopUpInscription} className ="hover:underline text-blue-700 pointer-events-auto" onClick={ <InscriptionPopUp />}> Inscrivez vous ici </a> */}
  </div>
  <button onClick={connexion} className="bg-blue-500 shadow active:bg-blue-700 hover:bg-blue-600 my-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
      Se connecter
    </button>

</form>
    )
  }
}

function connexion(){
console.log("aa")
}
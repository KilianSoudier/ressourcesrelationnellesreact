import './App.css';
import MenuNavigation from './Components/NavBar/MenuNavigation';
import "./tailwind.css"
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import PageAccueil from './Components/PageAccueil/PageAccueil';
import Connexion from './Components/Connexion/Connexion';
import HeaderSansConnexion from './Components/HeaderSansConnexion/HeaderSansConnexion';
import InscriptionPopUp from './Components/Inscription/Inscription';
import Posts from './Components/Posts/Posts';


export default function App() {
  return (
  <Routes>
    <Route path="/" element={[<HeaderSansConnexion/>, <PageAccueil />]}></Route>
    <Route path="/connexion" element={[<HeaderSansConnexion/>, <Connexion />]}></Route>
    <Route path="/inscription" element={[<HeaderSansConnexion/>, <InscriptionPopUp />]}></Route>
    <Route path="/posts" element={[<MenuNavigation/>, <Posts />]}></Route>


    {/* <Route path="/profil/:id" element={<MenuNavigation /> <Profil />} /> */}
    {/* <Route path="/*" element={<NotFound />} /> */}
  </Routes>
  )  
}
//Routes si page avec une page parent (routes imbriquées): import { Link } 
// Link to "/services/marketing" 
//     <Route path="/" element={<MenuNavigation />}><Route></Route><Route></Route></Route>
// dans les routes imbriquées : import Outlet et ajout de <Outlet />
// Permet de garder des contenus sans les dupliquer entre 3 pages.
//nouveau component rfc tab
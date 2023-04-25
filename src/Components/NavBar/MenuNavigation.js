import React from "react"
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';


class MenuNavigation extends React.Component{
    
    toggleMenu(){
        var menuPetit= document.getElementById("mobile-menu")
        if(menuPetit.classList[1]==="hidden"){
            menuPetit.classList.remove("hidden")
        }
        else{
            menuPetit.classList.add("hidden")
        }
    }
    deconnexion(){
        const cookies = new Cookies();
        cookies.remove("ResRelConId")
        window.location.href = "/"
    }

    render(){
        return (
            //<!-- Barre de navigation -->
            <nav className="bg-teal-500">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
              {/* //<!-- Logo --> */}
                <div className="flex-shrink-0 flex items-center">
                    <a href="/posts" className="text-white text-xl font-bold"><img className="w-20" alt="Ressources Relationnelles" src={require("../Assets/logo.png")} /></a>
                </div>
                {/* //<!-- Menu hamburger pour les petits écrans --> */}
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                    {/* bouton notifications */}
                    <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-teal-700 focus:outline-none focus:bg-teal-700 focus:text-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Ouvrir le menu</span>

                    {/* //<!-- icône cloche notification --> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-white h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>

                    {/* //<!-- icone cloche notification en attente -->
                    <svg xmlns="http://www.w3.org/2000/svg" class='hidden' fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-white h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg> */}

                    </button>

                    {/* bouton hamburger */}
                    <button onClick={this.toggleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-teal-700 focus:outline-none focus:bg-teal-700 focus:text-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Ouvrir le menu</span>
                        {/* //<!-- icône du menu hamburger --> */}
                        <svg className="block text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        {/* //<!-- icône du menu de fermeture X --> */}
                        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {/* //<!-- Menu principal pour les écrans larges --> */}
                <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                    <Link to={"/profil"} className="text-white hover:bg-teal-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Mon Profil</Link>
                    <a href="/stats" className="text-white hover:bg-teal-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Statistiques</a>
                    <a href="mailto:RessourcesRelationnellesSupport@mail.com
                    ?subject=Demande de support" className="text-white hover:bg-teal-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                    <a className="text-white hover:bg-teal-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={this.deconnexion}>Déconnexion</a>
                    
                    </div>
                </div>
                </div>
            </div>
            {/* //<!-- Menu déroulant pour les petits écrans --> */}
            <div className="sm:hidden hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="/profil" className="text-white hover:bg-teal-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Mon Profil</a>
                <a href="/stats" className="text-white hover:bg-teal-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Statistiques</a>
                <a className="text-white hover:bg-teal-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={this.deconnexion}>Déconnexion</a>
                <a href="mailto:RessourcesRelationnellesSupport@mail.com
                ?subject=Demande de support" className="text-white hover:bg-teal-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
    </div>
    </nav>
    );
    }
}
export default MenuNavigation
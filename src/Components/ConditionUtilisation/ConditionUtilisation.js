import { Component } from "react";

export default class ConditionUtilisation extends Component{
    render(){
        return(
            <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Charte des conditions d'utilisation des données personnelles</h1>
            <p className="text-lg text-gray-700 mb-4">Bienvenue sur notre réseau social gouvernemental. Avant de créer un compte, veuillez lire attentivement notre charte des conditions d'utilisation des données personnelles.</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Collecte des données personnelles</h2>
            <p className="text-lg text-gray-700 mb-4">Nous collectons les données personnelles suivantes :</p>
            <ul className="list-disc list-inside mb-4">
              <li className="text-gray-700">Nom et prénom</li>
              <li className="text-gray-700">Adresse e-mail</li>
              <li className="text-gray-700">Photo de profil</li>
              <li className="text-gray-700">Informations de connexion (adresse IP, cookies, etc.)</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">Nous collectons ces données afin de :</p>
            <ul className="list-disc list-inside mb-8">
              <li className="text-gray-700">Créer et gérer votre compte</li>
              <li className="text-gray-700">Vous permettre d'utiliser toutes les fonctionnalités du réseau social</li>
              <li className="text-gray-700">Personnaliser votre expérience utilisateur</li>
              <li className="text-gray-700">Améliorer notre réseau social en analysant les données collectées</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Utilisation des données personnelles</h2>
            <p className="text-lg text-gray-700 mb-4">Nous n'utilisons pas vos données personnelles à des fins commerciales. Nous nous engageons à ne pas les vendre, les louer ou les échanger avec des tiers.</p>
            <p className="text-lg text-gray-700 mb-4">Nous pouvons toutefois partager vos données personnelles avec :</p>
            <ul className="list-disc list-inside mb-4">
              <li className="text-gray-700">Les autorités compétentes en cas de demande légale</li>
              <li className="text-gray-700">Nos prestataires de services (hébergeurs, développeurs, etc.)</li>
            </ul>
            <p className="text-lg text-gray-700 mb-8">Nous nous engageons à prendre toutes les mesures nécessaires pour protégervos données personnelles et à respecter votre vie privée.</p>
<h2 className="text-2xl font-bold text-gray-900 mb-4">3. Durée de conservation des données personnelles</h2>
<p className="text-lg text-gray-700 mb-4">Nous conservons vos données personnelles aussi longtemps que nécessaire pour remplir les finalités pour lesquelles nous les avons collectées, sauf si une durée de conservation plus longue est requise par la loi.</p>
<p className="text-lg text-gray-700 mb-8">Si vous supprimez votre compte, vos données personnelles seront également supprimées.</p>
<h2 className="text-2xl font-bold text-gray-900 mb-4">4. Droits des utilisateurs</h2>
<p className="text-lg text-gray-700 mb-4">Vous disposez des droits suivants concernant vos données personnelles :</p>
<ul className="list-disc list-inside mb-4">
<li className="text-gray-700">Droit d'accès</li>
<li className="text-gray-700">Droit de rectification</li>
<li className="text-gray-700">Droit d'opposition</li>
<li className="text-gray-700">Droit à l'effacement</li>
<li className="text-gray-700">Droit à la portabilité</li>
</ul>
<p className="text-lg text-gray-700 mb-4">Pour exercer ces droits, vous pouvez contacter notre service clientèle à l'adresse suivante :</p>
<p className="text-lg text-gray-700 mb-8">Service clientèle<br/>
Réseau social gouvernemental<br/>
Adresse<br/>
Code postal Ville<br/>
France</p>
<h2 className="text-2xl font-bold text-gray-900 mb-4">5. Modification de la charte des conditions d'utilisation des données personnelles</h2>
<p className="text-lg text-gray-700 mb-4">Nous nous réservons le droit de modifier cette charte des conditions d'utilisation des données personnelles à tout moment. En cas de modification, nous vous en informerons par e-mail ou par une notification sur notre site.</p>
<p className="text-lg text-gray-700 mb-8">En continuant à utiliser notre réseau social après la modification de cette charte, vous acceptez les nouvelles conditions d'utilisation des données personnelles.</p>
<p className="text-lg text-gray-700 mb-4">Nous vous remercions de votre confiance et nous nous engageons à respecter et protéger vos données personnelles.</p>
</div>
        )
    }
}
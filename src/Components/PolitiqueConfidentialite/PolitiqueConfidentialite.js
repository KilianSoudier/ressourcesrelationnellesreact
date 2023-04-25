import { Component } from "react";

export default class PolitiqueConfidentialite extends Component{
    render(){
        return(
            <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-4">Politique de confidentialité</h1>
                <p className="mb-4">Bienvenue sur notre réseau social du gouvernement. Nous sommes attachés à la confidentialité de vos informations personnelles et nous prenons très au sérieux notre responsabilité de protéger votre vie privée. Cette politique de confidentialité vous explique comment nous collectons, utilisons, partageons et protégeons vos informations.</p>
                <h2 className="text-xl font-bold mb-2">1. Collecte d'informations</h2>
                <p className="mb-4">Nous collectons les informations que vous fournissez lors de votre inscription, telles que votre nom, votre adresse électronique et votre numéro de téléphone. Nous pouvons également collecter des informations sur votre utilisation du réseau social, y compris les pages que vous visitez et les interactions que vous avez avec d'autres utilisateurs.</p>
                <h2 className="text-xl font-bold mb-2">2. Utilisation d'informations</h2>
                <p className="mb-4">Nous utilisons vos informations pour vous offrir une expérience de réseau social personnalisée et pour communiquer avec vous au sujet des mises à jour et des événements importants. Nous pouvons également utiliser vos informations pour effectuer des analyses et améliorer notre service.</p>
                <h2 className="text-xl font-bold mb-2">3. Partage d'informations</h2>
                <p className="mb-4">Nous ne vendrons jamais vos informations personnelles à des tiers. Cependant, nous pouvons partager certaines informations avec des partenaires de confiance pour améliorer notre service. Nous ne partagerons jamais vos informations avec des tiers à des fins publicitaires.</p>
                <h2 className="text-xl font-bold mb-2">4. Sécurité des informations</h2>
                <p className="mb-4">Nous prenons des mesures de sécurité appropriées pour protéger vos informations personnelles contre toute perte, utilisation abusive ou accès non autorisé. Nous avons mis en place des contrôles administratifs, physiques et techniques pour assurer la confidentialité et la sécurité de vos informations.</p>
                <h2 className="text-xl font-bold mb-2">5. Vos choix</h2>
                <p className="mb-4">Vous avez le choix de fournir ou non certaines informations. Vous pouvez également modifier ou supprimer vos informations à tout moment. Si vous avez des préoccupations concernant l'utilisation de vos informations, veuillez nous contacter.</p>
                <h2 className="text-xl font-bold mb-2">6. Modifications de la politique</h2>
                <p className="mb-4">Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment et nous vous encourageons à la consulter régulièrement. Les modifications entreront en vigueur dès leur publication sur notre site web.</p>
                <h2 className="text-xl font-bold mb-2">7. Contactez-nous</h2>
                <p className="mb-4">Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité, veuillez nous contacter à l'adresse électronique suivante : <a href="mailto:RessourcesRelationnellesSupport@mail.com
            ?subject=Demande de support" class="text-blue-600 hover:underline">RessourcesRelationnellesSupport@mail.com</a></p>
                <p className="text-sm text-gray-600">Dernière mise à jour : Avril 2023</p>
            </div>
        )
    }
}
import React from 'react';
import { Link } from 'react-router-dom';
function PageAccueil() {
  return (
      <main className="container mx-auto h-full px-4 py-4 basis-auto">
        <div className="items-center justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Connectez-vous avec des gens qui partagent vos intérêts</h2>
          <p className="text-lg text-gray-600 mb-8">Ressources Relationnelles est un réseau social qui facilite les relations entre les individus. Rejoignez des groupes de discussion, trouvez des événements locaux, et participez à des conversations significatives avec des gens qui vous comprennent et vous soutiennent.</p>
          <Link to="/inscription">
            <button className="bg-blue-500 w-full hover:bg-blue-600 my-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Inscrivez-vous maintenant</button>
          </Link>
          <Link to="/connexion">
            <button className="bg-blue-500 w-full hover:bg-blue-600 my-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Connectez-vous</button>
            </Link>
        </div>
      </main>
//       <Footer container={true}>
//   <Footer.Copyright
//     href="/aPropos"
//     by="RessourcesRelationnelles"
//     year={2023}
//   />
//   <Footer.LinkGroup className="text-center">
//     <Footer.Link href="#">
//       À propos
//     </Footer.Link>
//     <Footer.Link href="#" className='mx-5'>
//       Mentions Légales
//     </Footer.Link>
//     <Footer.Link href="mailto:RessourcesRelation@exemple.org">
//       Contact 
//     </Footer.Link>
//   </Footer.LinkGroup>
// </Footer>
  );
}

export default PageAccueil;

import React from 'react';
import { Link } from 'react-router-dom';
function PageAccueil() {
  return (
      <main className=" bg-gray-100 container mx-auto h-full px-4 py-4 basis-auto">
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Connectez-vous avec des gens qui partagent vos intérêts</h2>
          <p className="text-lg text-gray-600 mb-8">Ressources Relationnelles est un réseau social qui facilite les relations entre les individus. Rejoignez des groupes de discussion, trouvez des événements locaux, et participez à des conversations significatives avec des gens qui vous comprennent et vous soutiennent.</p>
          <Link to="/inscription">
            <button className="bg-teal-500 w-full hover:bg-teal-600 my-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Inscrivez-vous maintenant</button>
          </Link>
          <Link to="/connexion">
            <button className="bg-teal-500 w-full hover:bg-teal-600 my-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Connectez-vous</button>
            </Link>
        </div>
      </main>
  );
}

export default PageAccueil;

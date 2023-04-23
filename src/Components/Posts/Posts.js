import React, { Component } from 'react'
export default class Posts extends Component {
    
  render() {

    return(
<>
            <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="space-y-8">
                

            {/* <!-- Post 1 --> */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                {/* <!-- Image --> */}
                <div className="w-full h-48 bg-gray-400">
                <image src="https://via.placeholder.com/500x300" alt="Placeholder" className="w-full h-full object-cover" />
                </div>
                {/* <!-- Contenu --> */}
                <div className="p-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"></span>
            {/* <!-- Post 2 --> */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                {/* <!-- Vidéo --> */}
                <div className="aspect-w-16 aspect-h-9">
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allowfullscreen className="w-full h-full"></iframe>
                </div>
                {/* <!-- Contenu --> */}
                <div className="p-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#musique</span>
                <h2 className="font-semibold text-gray-900 text-lg mb-2">La musique qui rend heureux</h2>
                <p className="text-gray-700 text-base">Découvrez comment la musique peut affecter votre humeur et améliorer votre bien-être général. Nous avons également inclus une liste de lecture spéciale pour vous aider à vous sentir heureux.</p>
                <a href="#" className="inline-block mt-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:outline-none focus:bg-gray-800">Lire la suite</a>
                </div>
            </div>

            {/* <!-- Post 3 --> */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                {/* <!-- Image --> */}
                <div className="w-full h-48 bg-gray-400">
                <image src="https://via.placeholder.com/500x300" alt="Placeholder" className="w-full h-full object-cover" />
                </div>
                {/* <!-- Contenu --> */}
                <div className="p-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#conseils</span>
                <h2 className="font-semibold text-gray-900 text-lg mb-2">Conseils pour une communication efficace</h2>
                <p className="text-gray-700 text-base">Apprenez à communiquer efficacement avec vos amis et votre famille pour éviter les malentendus et améliorer vos relations.</p>
                <a href="#" className="inline-block mt-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:outline-none focus:bg-gray-800">Lire la suite</a>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </>
    )
        
    

  }
}
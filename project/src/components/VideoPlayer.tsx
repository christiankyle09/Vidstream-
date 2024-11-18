import React from 'react';
import { ThumbsUp, ThumbsDown, Share2, Download } from 'lucide-react';

interface VideoPlayerProps {
  videoId: number;
}

export default function VideoPlayer({ videoId }: VideoPlayerProps) {
  return (
    <div className="max-w-[1280px] mx-auto p-4">
      <div className="aspect-video bg-black rounded-xl mb-4">
        {/* Placeholder pour le lecteur vidéo */}
        <div className="w-full h-full flex items-center justify-center text-white">
          Lecteur Vidéo
        </div>
      </div>
      
      <div className="mb-4">
        <h1 className="text-xl font-bold mb-2">Titre de la vidéo sélectionnée</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            <div>
              <p className="font-semibold">Nom de la chaîne</p>
              <p className="text-sm text-gray-600">1.2M abonnés</p>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
              S'abonner
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100">
              <ThumbsUp className="w-5 h-5" />
              <span>125K</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100">
              <ThumbsDown className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100">
              <Share2 className="w-5 h-5" />
              <span>Partager</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100">
              <Download className="w-5 h-5" />
              <span>Télécharger</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-xl">
        <p className="font-semibold mb-2">Description</p>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}
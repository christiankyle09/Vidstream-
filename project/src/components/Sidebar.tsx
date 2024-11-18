import React from 'react';
import { Home, TrendingUp, Users, Library, History, ThumbsUp, PlaySquare } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Accueil' },
  { icon: TrendingUp, label: 'Tendances' },
  { icon: Users, label: 'Abonnements' },
  { icon: Library, label: 'Bibliothèque' },
  { icon: History, label: 'Historique' },
  { icon: ThumbsUp, label: 'Vidéos aimées' },
  { icon: PlaySquare, label: 'Playlists' },
];

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <aside className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white transition-all duration-300 ${
      isOpen ? 'w-64' : 'w-20'
    } border-r`}>
      <div className="py-2">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className="flex items-center gap-4 px-3 py-3 hover:bg-gray-100 transition-colors"
          >
            <item.icon className="w-6 h-6 min-w-[24px]" />
            <span className={`${isOpen ? 'block' : 'hidden'}`}>{item.label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
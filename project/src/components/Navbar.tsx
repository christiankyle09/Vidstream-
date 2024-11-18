import React from 'react';
import { Menu, Search, Bell, User, Youtube } from 'lucide-react';

export default function Navbar({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white z-50 flex items-center px-4 justify-between border-b">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-full">
          <Menu className="w-6 h-6" />
        </button>
        <a href="/" className="flex items-center gap-1">
          <Youtube className="w-8 h-8 text-red-600" />
          <span className="text-xl font-semibold">VidStream</span>
        </a>
      </div>
      
      <div className="flex-1 max-w-2xl mx-4">
        <div className="flex">
          <input
            type="text"
            placeholder="Rechercher"
            className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
          />
          <button className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <User className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
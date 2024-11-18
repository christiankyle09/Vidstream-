import React from 'react';
import VideoCard from './VideoCard';

const videos = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
    title: 'Découverte des merveilles naturelles',
    channel: 'Nature Explorer',
    views: '1.2M vues',
    duration: '15:30',
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1526925539332-aa3b66e35444',
    title: 'Tutoriel: Créer une application React',
    channel: 'CodeMaster',
    views: '850K vues',
    duration: '22:15',
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
    title: 'Les meilleurs spots de voyage 2024',
    channel: 'TravelGuide',
    views: '2.1M vues',
    duration: '18:45',
  },
  {
    id: 4,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    title: 'Marketing Digital: Guide Complet',
    channel: 'BusinessPro',
    views: '925K vues',
    duration: '25:10',
  },
  {
    id: 5,
    thumbnail: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    title: 'Recettes Healthy et Rapides',
    channel: 'HealthyKitchen',
    views: '1.5M vues',
    duration: '12:20',
  },
  {
    id: 6,
    thumbnail: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5',
    title: 'Routine Fitness à la maison',
    channel: 'FitLife',
    views: '3.2M vues',
    duration: '30:00',
  },
];

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {videos.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  );
}
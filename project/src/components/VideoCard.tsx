import React from 'react';

interface VideoCardProps {
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  duration: string;
}

export default function VideoCard({ thumbnail, title, channel, views, duration }: VideoCardProps) {
  return (
    <div className="cursor-pointer group">
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-sm px-2 py-1 rounded">
          {duration}
        </div>
      </div>
      <div className="mt-2">
        <h3 className="font-semibold text-sm line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{channel}</p>
        <p className="text-gray-600 text-sm">{views}</p>
      </div>
    </div>
  );
}
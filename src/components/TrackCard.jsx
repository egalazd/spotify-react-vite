import React from 'react';

export default function TrackCard({ track, onSelect }) {
  return (
    <div
      className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700"
      onClick={() => onSelect(track)}
    >
      <img src={track.album.images[0].url} alt={track.name} className="rounded mb-2" />
      <h2 className="font-semibold">{track.name}</h2>
      <p className="text-gray-400 text-sm">{track.artists.map(a => a.name).join(', ')}</p>
    </div>
  );
}

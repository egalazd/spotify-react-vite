import React from 'react';

export default function Player({ track }) {
  return (
    <div className="mt-6">
      <iframe
        src={`https://open.spotify.com/embed/track/${track.id}`}
        width="100%"
        height="80"
        frameBorder="0"
        allow="encrypted-media"
        title="Spotify Player"
      />
    </div>
  );
}

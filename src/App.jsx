import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';
import Player from './components/Player';

export default function App() {
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Spotify Search</h1>
      <SearchBar setTracks={setTracks} />
      <TrackList tracks={tracks} onSelect={setSelectedTrack} />
      {selectedTrack && <Player track={selectedTrack} />}
    </div>
  );
}

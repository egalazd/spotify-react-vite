import React, { useState } from 'react';

export default function SearchBar({ setTracks }) {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const tokenResponse = await fetch('/api/token');
    const { access_token } = await tokenResponse.json();
    const res = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    const data = await res.json();
    setTracks(data.tracks.items);
  };

  return (
    <form onSubmit={handleSearch} className="mb-6 flex justify-center">
      <input
        type="text"
        className="p-2 w-80 rounded-l bg-gray-800 border border-gray-600"
        placeholder="Busca una canción..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-r"
      >
        Buscar
      </button>
    </form>
  );
}

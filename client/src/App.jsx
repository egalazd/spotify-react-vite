import { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import TrackList from "./components/TrackList.jsx";
import Player from "./components/Player.jsx";
export default function App() {
  const [tracks, setTracks] = useState([]);
  const [current, setCurrent] = useState(null);
  return (
    <div className="app">
      <header><h1>🎵 MyMusic</h1><p>Con Spotify API</p></header>
      <SearchBar onResults={setTracks} />
      <section><h2>Resultados</h2><TrackList tracks={tracks} onSelect={setCurrent} /></section>
      {current && (<section><h2>Reproduciendo</h2><Player track={current} /></section>)}
    </div>
  );
}
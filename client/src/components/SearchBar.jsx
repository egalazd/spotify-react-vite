import { useState } from "react";
export default function SearchBar({ onResults }) {
  const [q, setQ] = useState("");
  const search = async () => {
    if (!q.trim()) return;
    const url = `${import.meta.env.VITE_API_URL}/api/spotify/search?query=${encodeURIComponent(q)}`;
    const res = await fetch(url);
    const data = await res.json();
    onResults(data);
  };
  const handleKey = (e) => { if (e.key === "Enter") search(); };
  return (<div className="search">
    <input placeholder="Buscar canciones..." value={q} onChange={(e)=>setQ(e.target.value)} onKeyDown={handleKey} />
    <button onClick={search}>Buscar</button>
  </div>);
}
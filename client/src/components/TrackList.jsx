import TrackCard from "./TrackCard.jsx";
export default function TrackList({ tracks, onSelect }) {
  if (!tracks?.length) return <p className="artist">No hay resultados aún.</p>;
  return (<div className="grid">{tracks.map(t => (<TrackCard key={t.id} track={t} onSelect={onSelect} />))}</div>);
}
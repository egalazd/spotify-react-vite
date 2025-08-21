export default function TrackCard({ track, onSelect }) {
  const cover = track.album?.images?.[0]?.url;
  const artists = (track.artists || []).map(a => a.name).join(", ");
  return (<div className="card" onClick={() => onSelect(track)}>
    <img src={cover} alt={track.name} />
    <div className="title">{track.name}</div>
    <div className="artist">{artists}</div>
    <button className="btn" onClick={(e)=>{e.stopPropagation();onSelect(track);}}>Reproducir</button>
  </div>);
}
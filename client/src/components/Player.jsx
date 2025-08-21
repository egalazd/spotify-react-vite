export default function Player({ track }) {
  return (<div className="nowplaying">
    <img src={track.album.images[0]?.url} alt={track.name} />
    <div>
      <div className="title">{track.name}</div>
      <div className="artist">{track.artists.map(a => a.name).join(", ")}</div>
      <iframe style={{borderRadius:12, marginTop:8}}
        src={`https://open.spotify.com/embed/track/${track.id}`} width="100%" height="152" frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" loading="lazy"></iframe>
    </div>
  </div>);
}
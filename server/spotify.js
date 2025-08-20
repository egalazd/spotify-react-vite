// Aquí podrías agregar funciones extra para trabajar con Spotify
export const getTrack = async (token, trackId) => {
  const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await response.json();
};

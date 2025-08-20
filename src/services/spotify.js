let accessToken = null
let expiresAt = 0

async function getAccessToken() {
  const now = Date.now()
  if (accessToken && now < expiresAt) return accessToken

  const res = await fetch('/api/token')
  if (!res.ok) throw new Error('No se pudo obtener token')
  const data = await res.json()
  accessToken = data.access_token
  // Expira en ~55 min (data.expires_in suele ser 3600s)
  expiresAt = now + (data.expires_in - 300) * 1000
  return accessToken
}

export async function getNewReleases(limit = 10) {
  const token = await getAccessToken()
  const res = await fetch(`https://api.spotify.com/v1/browse/new-releases?limit=${limit}`, {
    headers: { Authorization: 'Bearer ' + token }
  })
  if (!res.ok) throw new Error('Error al consultar Spotify')
  const data = await res.json()
  return data.albums.items.map(album => ({
    id: album.id,
    title: album.name,
    artist: album.artists.map(a => a.name).join(', '),
    duration: null,
    cover: album.images?.[0]?.url,
    audio: null
  }))
}

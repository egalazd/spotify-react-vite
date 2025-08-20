import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import TrackList from './components/TrackList'
import Player from './components/Player'
import { getNewReleases } from './services/spotify'

export default function App() {
  const [tracks, setTracks] = useState([])
  const [current, setCurrent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const data = await getNewReleases(12)
        setTracks(data)
      } catch (e) {
        setError('Error cargando lanzamientos de Spotify')
        console.error(e)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  function handlePlay(track) { setCurrent(track) }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <section className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-2">Nuevos lanzamientos</h2>
              {loading && <div className="text-sm text-slate-500">Cargando…</div>}
              {error && <div className="text-sm text-red-600">{error}</div>}
              {!loading && !error && <TrackList tracks={tracks} onPlay={handlePlay} />}
            </section>
          </div>
          <aside className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold">Acerca</h3>
              <p className="text-sm text-slate-600 mt-2">
                React + Vite + Tailwind con conexión a la API de Spotify (new releases).
              </p>
            </div>
          </aside>
        </div>
      </main>
      <Player track={current} />
    </div>
  )
}

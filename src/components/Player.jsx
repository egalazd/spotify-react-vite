import React, { useEffect, useRef, useState } from 'react'

export default function Player({ track }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!audioRef.current) return
    if (track?.audio) {
      audioRef.current.src = track.audio
      audioRef.current.play().then(() => setPlaying(true)).catch(()=>{})
    } else {
      audioRef.current.pause()
      setPlaying(false)
    }
    return () => { audioRef.current?.pause(); setPlaying(false) }
  }, [track])

  function togglePlay() {
    if (!audioRef.current) return
    if (playing) audioRef.current.pause()
    else audioRef.current.play()
    setPlaying(!playing)
  }

  function onTimeUpdate() {
    const audio = audioRef.current
    setProgress(audio.currentTime / (audio.duration || 1))
  }

  return (
    <div className="w-full bg-white border-t p-3 flex items-center gap-4 md:gap-6">
      <audio ref={audioRef} onTimeUpdate={onTimeUpdate} />
      <div className="flex items-center gap-4 min-w-0">
        <div className="w-12 h-12 rounded-md bg-slate-200 overflow-hidden">
          {track?.cover && <img src={track.cover} alt={track?.title} className="w-12 h-12 object-cover" />}
        </div>
        <div className="min-w-0">
          <div className="font-medium truncate">{track?.title || 'Selecciona una pista'}</div>
          <div className="text-sm text-slate-500 truncate">{track?.artist || ''}</div>
        </div>
      </div>
      <div className="flex-1 mx-2 hidden sm:block">
        <div className="h-1 w-full bg-slate-200 rounded overflow-hidden">
          <div style={{ width: `${(progress || 0) * 100}%` }} className="h-full bg-blue-600" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={togglePlay} className="px-3 py-1 rounded-md bg-slate-100" disabled={!track?.audio}>
          {playing ? 'Pausa' : 'Play'}
        </button>
        <div className="text-sm text-slate-500 hidden sm:block">{track?.duration || ''}</div>
      </div>
    </div>
  )
}

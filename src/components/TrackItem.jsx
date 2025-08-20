import React from 'react'
import FollowButton from './FollowButton'

export default function TrackItem({ track, onPlay }) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/60 transition">
      <img src={track.cover} alt={track.title} className="w-14 h-14 rounded-md object-cover" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium truncate">{track.title}</div>
            <div className="text-sm text-slate-500 truncate">{track.artist}</div>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <button
            onClick={() => onPlay(track)}
            className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm disabled:bg-gray-400"
            disabled={!track.audio}
          >
            {track.audio ? 'Reproducir' : 'Vista previa no disponible'}
          </button>
          <FollowButton initial={false} />
        </div>
      </div>
    </div>
  )
}

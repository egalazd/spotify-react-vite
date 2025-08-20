import React from 'react'
import TrackItem from './TrackItem'

export default function TrackList({ tracks = [], onPlay }) {
  return (
    <div className="space-y-2">
      {tracks.map(track => (
        <TrackItem key={track.id} track={track} onPlay={onPlay} />
      ))}
    </div>
  )
}

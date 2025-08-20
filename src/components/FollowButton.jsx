import React, { useState } from 'react'

export default function FollowButton({ initial = false, onToggle }) {
  const [followed, setFollowed] = useState(initial)

  function toggle() {
    setFollowed(v => {
      const next = !v
      onToggle?.(next)
      return next
    })
  }

  return (
    <button
      onClick={toggle}
      className={`px-3 py-1 rounded-full text-sm border transition ${followed ? 'bg-green-600 text-white border-transparent' : 'bg-white text-slate-700'}`}
      aria-pressed={followed}
    >
      {followed ? 'Siguiendo' : 'Seguir'}
    </button>
  )
}

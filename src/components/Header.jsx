import React from 'react'

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between p-4 md:p-6 bg-white/60 backdrop-blur-sm border-b">
      <div className="flex items-center gap-3">
        <div className="text-2xl font-bold">MyMusic</div>
        <div className="hidden md:block text-sm text-slate-500">Con Spotify API</div>
      </div>
      <div className="flex items-center gap-3">
        <input
          type="search"
          placeholder="Buscar… (demo)"
          className="hidden md:inline-block px-3 py-1 rounded-md border bg-slate-50"
          aria-label="Buscar"
        />
      </div>
    </header>
  )
}

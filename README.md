# Spotify App (Vite + React + Express)

## Estructura
- client/: React + Vite
- server/: Express + Spotify API (Client Credentials)

## Variables de entorno
- server/.env
```
PORT=5000
SPOTIFY_CLIENT_ID=localhe66005cdcfd74a33aca9577f921af3fcost
SPOTIFY_CLIENT_SECRET=sdfg5s1ccd5cbf8b4b4d4382deda8c7fb16d374d6f5545
```
- client/.env
```
VITE_API_URL=http://localhost:5000
```

## Cómo ejecutar
```bash
# Backend
cd server
npm install
npm run dev

# Frontend
cd ../client
npm install
npm run dev
```
Abrir: http://localhost:5173

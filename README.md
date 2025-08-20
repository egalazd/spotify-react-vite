# Spotify React + Vite App

App de ejemplo que muestra un catálogo tipo Spotify usando la **API de Spotify**.
Incluye **React + Vite + Tailwind** y un **servidor Express** para obtener el token de Spotify de forma segura (sin exponer el client secret en el navegador).

## Requisitos
- Node.js 18+
- Cuenta en [Spotify for Developers](https://developer.spotify.com/dashboard/)

## Configuración
1. Crea un archivo `.env` en la raíz con:
   ```env
   SPOTIFY_CLIENT_ID=tu_client_id
   SPOTIFY_CLIENT_SECRET=tu_client_secret
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Arranca el entorno de desarrollo:
   ```bash
   npm run dev
   ```
   - Vite corre en http://localhost:5173
   - El servidor Express corre en http://localhost:5174 (proxied via `/api`)

## Qué hace
- El cliente llama a `/api/token` (proxy a Express) para obtener un **access token**.
- Con ese token, consulta `GET /v1/browse/new-releases` de Spotify y pinta las carátulas.
- Si una pista no tiene `preview_url`, el botón de reproducir se desactiva.

## Scripts
- `npm run dev` arranca Vite y el servidor Express en paralelo.
- `npm run build` genera el build de producción.
- `npm run preview` sirve el build.

> Nota: Para producción, despliega el servidor Express (o serverless/edge) y sirve el frontend con la misma ruta proxy `/api`.

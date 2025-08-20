const express = require('express')
const fetch = require('node-fetch')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()
const app = express()
const PORT = 5174

app.use(cors())
app.get('/api/token', async (req, res) => {
  try {
    const clientId = process.env.SPOTIFY_CLIENT_ID
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
    if (!clientId || !clientSecret) {
      return res.status(500).json({ error: 'Faltan credenciales en .env' })
    }
    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
    const r = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + auth
      },
      body: 'grant_type=client_credentials'
    })
    const data = await r.json()
    if (!r.ok) {
      return res.status(500).json({ error: 'Error desde Spotify', details: data })
    }
    res.json(data)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Error obteniendo token' })
  }
})

app.listen(PORT, () => {
  console.log(`Express escuchando en http://localhost:${PORT}`)
})

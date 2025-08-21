import { getAccessToken, searchSpotify } from "../services/spotifyService.js";
export const health = (_req, res) => res.json({ ok: true });
export const searchTracks = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).json({ error: "Falta ?query" });
    const token = await getAccessToken();
    const items = await searchSpotify(token, query);
    res.json(items);
  } catch (err) {
    console.error(err?.response?.data || err.message);
    res.status(500).json({ error: "Error al buscar canciones en Spotify" });
  }
};
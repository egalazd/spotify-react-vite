import axios from "axios";
const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

export const getAccessToken = async () => {
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
    throw new Error("Faltan variables de entorno SPOTIFY_CLIENT_ID o SPOTIFY_CLIENT_SECRET");
  }

  const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64");
  const { data } = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({ grant_type: "client_credentials" }),
    { headers: { Authorization: `Basic ${basic}`, "Content-Type": "application/x-www-form-urlencoded" } }
  );
  return data.access_token;
};

export const searchSpotify = async (token, query) => {
  if (!token) return [];
  try {
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      params: { q: query, type: "track", limit: 12 },
      headers: { Authorization: `Bearer ${token}` },
    });
    return data?.tracks?.items ?? [];
  } catch (err) {
    console.error("Error buscando tracks:", err.response?.data || err.message);
    return [];
  }
};

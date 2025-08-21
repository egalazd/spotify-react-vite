import 'dotenv/config';  
import express from "express";
import cors from "cors";
import spotifyRoutes from "./routes/spotify.js";

console.log(process.env.SPOTIFY_CLIENT_ID, process.env.SPOTIFY_CLIENT_SECRET);


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/spotify", spotifyRoutes);

app.get("/", (_req, res) => res.send("Spotify Backend OK"));

app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import spotifyRoutes from "./routes/spotify.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/spotify", spotifyRoutes);

app.get("/", (_req, res) => res.send("Spotify Backend OK"));

app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
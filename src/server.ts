import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import leaderboardRoutes from "./routes/leaderboardRoutes";

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
// app.use(
//   cors({
//     origin: ["http://localhost:3000", "http://localhost:3001"],
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// );
// app.options("*", cors());

app.use(express.json());

app.use("/api/leaderboards", leaderboardRoutes);

let players: any = {}; // Store all connected players

// Socket.io logic for real-time leaderboard updates
io.on("connection", (socket) => {
  console.log("A player connected");

  socket.on("player-update", (data) => {
    const { game, username, metrics } = data;
    players[socket.id] = { game, username, metrics };
    io.emit("leaderboard-update", Object.values(players));
    // Broadcast updated data to all clients
  });

  socket.on("disconnect", () => {
    console.log("A player disconnected");
    delete players[socket.id];
    io.emit("leaderboard-update", Object.values(players));
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

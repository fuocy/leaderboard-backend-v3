import { Request, Response } from "express";
import Leaderboard from "../models/Leaderboard";
import Player from "../models/Player";

export const createLeaderboard = async (req: Request, res: Response) => {
  const { game, name, metrics, sorting } = req.body;
  try {
    const leaderboard = new Leaderboard({ game, name, metrics, sorting });
    await leaderboard.save();
    res.status(201).json(leaderboard);
  } catch (error) {
    res.status(500).json({ error: "Failed to create leaderboard" });
  }
};

export const getLeaderboardsByGame = async (req: Request, res: Response) => {
  const { gameName } = req.params;
  try {
    const leaderboards = await Leaderboard.find({ game: gameName });
    res.status(200).json(leaderboards);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve leaderboards" });
  }
};

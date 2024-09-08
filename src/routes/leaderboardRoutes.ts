import { Router } from "express";
import {
  createLeaderboard,
  getLeaderboardsByGame,
} from "../controllers/leaderboardController";

const router: Router = Router();

router.post("/create", createLeaderboard);
router.get("/:gameName", getLeaderboardsByGame);

export default router;

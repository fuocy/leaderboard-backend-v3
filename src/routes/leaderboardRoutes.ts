import { Router } from "express";
import {
  createLeaderboard,
  getLeaderboardsByGame,
  deleteLeaderboard,
} from "../controllers/leaderboardController";

const router: Router = Router();

router.post("/create", createLeaderboard);
router.get("/:gameName", getLeaderboardsByGame);
router.delete("/:id", deleteLeaderboard);

export default router;

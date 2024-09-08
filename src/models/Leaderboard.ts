import mongoose, { Schema, Document } from "mongoose";

interface Metric {
  name: string;
  type: "number" | "text";
}

interface Sorting {
  metric: string;
  order: "asc" | "desc";
}

export interface ILeaderboard extends Document {
  game: string;
  name: string;
  metrics: Metric[];
  sorting: Sorting | null;
}

const LeaderboardSchema: Schema = new Schema({
  game: { type: String, required: true },
  name: { type: String, required: true },
  metrics: [
    {
      name: { type: String, required: true },
      type: { type: String, required: true, enum: ["text", "number"] },
    },
  ],
  sorting: {
    metric: { type: String },
    order: { type: String, default: "desc" },
  },
});

export default mongoose.model<ILeaderboard>("Leaderboard", LeaderboardSchema);

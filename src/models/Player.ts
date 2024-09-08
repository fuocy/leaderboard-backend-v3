import mongoose, { Schema, Document } from "mongoose";

export interface IPlayerState extends Document {
  username: string;
  game: string;
  metrics: { [metricName: string]: number };
}

const PlayerStateSchema: Schema = new Schema({
  username: { type: String, required: true },
  game: { type: String, required: true },
  metrics: { type: Map, of: Number },
});

export default mongoose.model<IPlayerState>("PlayerState", PlayerStateSchema);

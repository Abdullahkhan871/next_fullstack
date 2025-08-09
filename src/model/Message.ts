import mongoose, { Schema, Document } from "mongoose";

export interface Imessage extends Document {
  content: string;
  createdAt: Date;
}
export const messageSchema: Schema<Imessage> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Message =
  mongoose.models.Messages ||
  mongoose.model<Imessage>("Messages", messageSchema);

export default Message;

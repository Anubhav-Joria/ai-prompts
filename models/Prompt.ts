import { Schema, model, models } from "mongoose";

const promptSchema = new Schema({
  prompt: {
    type: String,
    required: [true, "Required field"],
  },
  userId: {
    type: String,
    required: [true, "Id is required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is a Required field"],
  },
  user: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: String,
    id: {
      type: String,
      required: true,
      unique: true,
    },
  },
});

const Prompts = models.Prompts || model("Prompts", promptSchema);
export default Prompts;

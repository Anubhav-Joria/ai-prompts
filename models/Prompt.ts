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
    type:Schema.Types.ObjectId,
    ref:'User',
  },
});

const Prompts = models.Prompts || model("Prompts", promptSchema);
export default Prompts;

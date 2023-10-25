import { Schema, models, model } from "mongoose";

const PromptSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: 'User' },
  tag: {
    type: String,
    required: [true, 'tag is required !']
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required !']
  }
})

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;
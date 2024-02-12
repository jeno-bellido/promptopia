import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required.'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required.'],
    }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);
export default Prompt;



// if the above seems to have error, try the code below
/** let Prompt;
try {
  Prompt = model('Prompt');
} catch {
  Prompt = model('Prompt', PromptSchema);
}
*/

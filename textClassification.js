//analyzing the sentiment or emotional tone of a given sentence and determining whether it is positive or negative.


import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

const model = "distilbert-base-uncased-finetuned-sst-2-english";

// const inputs = 'I like you.';
// const inputs = 'I hate you.';
// const inputs = 'I am a donkey.';
// const inputs = 'I am a happy donkey.';
const inputs = 'I am a sad donkey.';

const result = await hf.textClassification({
    model: model,
    inputs: inputs
  })

console.log(result)
//

import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

const model = "sentence-transformers/distilbert-base-nli-mean-tokens";

const inputs = 'That is a happy person. This is a sad person';

let result = await hf.featureExtraction({
    model: model,
    inputs: inputs,
  })

console.log(result)

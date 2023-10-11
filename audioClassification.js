//tells percentage of classification (neutral, happy, angry, sad)

import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";
import { readFileSync } from 'fs';

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

const model = "superb/hubert-large-superb-er";

let result = await hf.audioClassification({
    model: model,
    data: readFileSync('./talking.wav')
  })

console.log(result)

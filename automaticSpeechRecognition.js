//take raw audio as input and transcribe it into corresponding textual representations.

import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";
import { readFileSync } from 'fs';

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

const model = "facebook/wav2vec2-large-960h-lv60-self";

let result = await hf.automaticSpeechRecognition({
    model: model,
    data: readFileSync('./talking.wav')
  })

console.log(result)

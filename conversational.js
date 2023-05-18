//translates to german and other languages, but dont know how to select other languages yet

import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

const model = "microsoft/DialoGPT-large";

const inputs = {
    past_user_inputs: ['Which movie is the best ?'],
    // generated_responses: ['It is Die Hard for sure.'],
    text: 'Can you explain in detail why ?'
}

const result = await hf.conversational({
    model: model,
    inputs: inputs,
  })

console.log(result)
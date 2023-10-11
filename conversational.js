//translates to german and other languages, but dont know how to select other languages yet

import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

const model = "microsoft/DialoGPT-large";

const inputs = {
    text: 'Pretend you are a cat. Respond with a phrase a happy cat might say.'
}

const result = await hf.conversational({
    model: model,
    inputs: inputs,
    num_return_sequences: 5
  })

console.log(result)
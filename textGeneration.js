// take a given input, such as a prompt or a partial sentence, and generate a coherent and contextually relevant continuation of that text.


import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

const model = "gpt2";

// const inputs = "The answer to the universe is";
const inputs = "Bettie White was";

const result = await hf.textGeneration({
    model: model,
    inputs: inputs
  })

console.log(result)
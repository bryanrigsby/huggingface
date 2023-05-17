//

import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

const model = "t5-base";

// const inputs = "My name is Sarah Jessica Parker but you can call me Jessica.";
// const inputs = "The Empire State Building was once the tallest building in New York City.";
const inputs = "My name is Wolfgang and I live in Berlin."; 

const result = await hf.translation({
    model: model,
    inputs: inputs
  })

console.log(result)
//translates to german and other languages, but dont know how to select other languages yet

import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

const model = "t5-base";

const inputs = "Bow wow wow."; 

const result = await hf.translation({
    model: model,
    inputs: inputs,
    language: 10
  })

console.log(result)
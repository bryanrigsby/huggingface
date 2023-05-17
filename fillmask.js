//designed to understand and generate human-like text by learning the contextual relationships between words in a given sentence or piece of text.

import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

const model = "bert-base-uncased";

const inputs = '[MASK] world!';

const result = await hf.fillMask({
    model: model,
    inputs: inputs
  })

console.log(result)
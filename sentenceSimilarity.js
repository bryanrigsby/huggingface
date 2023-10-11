// take a given input, such as a prompt or a partial sentence, and generate a coherent and contextually relevant continuation of that text.


import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

const model = "sentence-transformers/paraphrase-xlm-r-multilingual-v1";

const inputs = {
    source_sentence: 'That is a happy person',
    sentences: [
      'That is a happy dog',
      'That is a very happy person',
      'Today is a sunny day'
    ]
  };

let result = await hf.sentenceSimilarity({
    model: model,
    inputs: inputs,
  })

console.log(result)

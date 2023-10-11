// take a given input, such as a prompt or a partial sentence, and generate a coherent and contextually relevant continuation of that text.


import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

const model = "google/flan-t5-xxl";

const inputs = 'once upon a time,';

const parameters = { max_new_tokens: 250 };

for await (const output of hf.textGenerationStream({
    model: model,
    inputs: inputs,
    parameters: parameters
  })){

      console.log('token text: ', output.token.text)
      console.log('generated text: ', output.generated_text)
  }

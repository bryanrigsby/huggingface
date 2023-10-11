// take a given input, such as a prompt or a partial sentence, and generate a coherent and contextually relevant continuation of that text.


import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

const model = "espnet/kan-bayashi_ljspeech_vits";

const inputs = 'Hello world!';

let result = await hf.textToSpeech({
    model: 'espnet/kan-bayashi_ljspeech_vits',
    inputs: 'Hello world!'
})

console.log(result)

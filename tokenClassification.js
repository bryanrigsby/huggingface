// It can take a sentence or a piece of text as input and identify and classify named entities present in the text, such as person names, locations, organizations, and more.

import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

const model = "dbmdz/bert-large-cased-finetuned-conll03-english";

// const inputs = "My name is Sarah Jessica Parker but you can call me Jessica.";
// const inputs = "The Empire State Building was once the tallest building in New York City.";
const inputs = "Here are Some random Capitalized words."; //found no relevance to these words

const result = await hf.tokenClassification({
    model: model,
    inputs: inputs
  })

console.log(result)
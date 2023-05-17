import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

const model = "google/tapas-base-finetuned-wtq";

// const query = `How many stars does the transformers repository have?`;
// const query = `What programming language is the transformers repository in?`;
const query = `What repositories do include the programming language Rust?`;

const table = {
    Repository: ['Transformers', 'Datasets', 'Tokenizers'],
    Stars: ['36542', '4512', '3934'],
    Contributors: ['651', '77', '34'],
    'Programming language': ['Python', 'Python', 'Rust, Python and NodeJS']
}

const result = await hf.tableQuestionAnswering({
    model: model,
    inputs: {
      query: query,
      table: table
    }
  })

console.log(result)
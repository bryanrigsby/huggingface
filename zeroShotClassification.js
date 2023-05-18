//translates to german and other languages, but dont know how to select other languages yet

import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

const model = "facebook/bart-large-mnli";

const inputs = [
  "Hi, I recently bought a device from your company but it is not working as advertised and I would like to get reimbursed!", 
  "I really like tacos"
]; 

const parameters = {
    candidate_labels: ['refund', 'legal', 'faq']
} 

const result = await hf.zeroShotClassification({
    model: model,
    inputs: inputs,
    parameters: parameters
  })

console.log(result)
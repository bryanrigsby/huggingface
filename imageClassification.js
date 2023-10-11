//classify images into different categories or labels. 

import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";
import { readFileSync } from 'fs';

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

const model = "google/vit-base-patch16-224";

let result = await hf.imageClassification({
    model: model,
    // data: readFileSync('./dragon.png')
    data: readFileSync('./knight.png')

  })

console.log(result)

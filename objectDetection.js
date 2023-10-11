//detects and classifies objects in an image
import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";
import { readFileSync } from 'fs';

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

const model = "facebook/detr-resnet-50";

let result = await hf.objectDetection({
    model: model,
    // data: readFileSync('./airport.jpeg')
    data: readFileSync('./savanna.jpeg')

  })

console.log(result)

//Imagine you have a picture with different things in it, like a cat, a dog, and a tree. The "facebook/detr-resnet-50-panoptic" model can look at the picture and tell you not only what things are in it (like the cat, dog, and tree) but also color them in so that you can see exactly where they are. It's like a super smart computer that can understand pictures and point out all the different things in them, making it easier for us to understand and work with pictures.







import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";
import { readFileSync } from 'fs';

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

const model = "facebook/detr-resnet-50-panoptic";

let result = await hf.imageSegmentation({
    model: model,
    // data: readFileSync('./airport.jpeg')
    data: readFileSync('./savanna.jpeg')

  })

console.log(result)

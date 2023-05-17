import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

const model = "nlpconnect/vit-gpt2-image-captioning";
const imageURL = "https://cdn.mos.cms.futurecdn.net/HjFE8NKWuCmgfHCcndJ3rK.jpg";

const response = await fetch(imageURL);
const imageBlob = await response.blob();

const result = await hf.imageToText({
    data: imageBlob,
    model: model
})


console.log(result)
//cannot get image to save...work on this later

import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";
import fs  from 'fs';
import { pipeline } from "stream/promises";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;
const model = "stabilityai/stable-diffusion-2";
const inputs = 'award winning high resolution photo of a giant tortoise/((ladybird)) hybrid, [trending on artstation]';
const parameters = {};

const hf = new HfInference(HF_ACCESS_TOKEN);

let result;

const generateImage = async () => {
    try {
      const result = await hf.textToImage({
        model: model,
        inputs: inputs,
        parameters: parameters
      });
  
      const filePath = 'textToImageResult.jpg';

      console.log('result', result)
  
      const writeStream = fs.createWriteStream(filePath);
        
      // await result.stream().pipeTo(writeStream);
  
      // writeStream.on('finish', () => {
      //   console.log('Image saved successfully!');
      // });
  
      // writeStream.on('error', (error) => {
      //   console.error('Error saving image:', error);
      // });

      pipeline(result.stream(), writeStream, (error) => {
        if (error) {
          console.error("Error saving image:", error);
        } else {
          console.log("Image saved successfully!");
        }
      });
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };
  
  generateImage();
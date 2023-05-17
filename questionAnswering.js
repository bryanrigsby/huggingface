import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

const model = "deepset/roberta-base-squad2";

// const question = `What is the phone number to IMMY?`;
// const question = `What is the address to IMMY?`;
// const question = `What does IMMY do?`;
const question = `When was IMMY founded?`;

const context = `Immunomycologics, Inc. (IMMY) is a biotechnology company specializing in the development and manufacturing of diagnostic tests for infectious diseases, particularly fungal infections. Here is some information about Immunomycologics, Inc.:

1. Overview:
- Immunomycologics, Inc. (IMMY) was founded in 1979 and is headquartered in Norman, Oklahoma, United States.
- The company focuses on providing innovative diagnostic solutions for healthcare professionals to aid in the accurate and timely diagnosis of fungal infections.
- IMMY's products are used in clinical laboratories and healthcare facilities worldwide.

2. Product Offerings:
- IMMY offers a range of diagnostic tests for various fungal infections. Some of their key products include:
    - Histoplasma capsulatum Antibody Detection Tests
    - Aspergillus Antigen Detection Tests
    - Coccidioides Antibody Detection Tests
    - Blastomyces Antibody Detection Tests
    - Cryptococcus Antigen Detection Tests
    - Beta-D-Glucan Detection Tests

3. Contact Information:
- Official website: The official website of Immunomycologics, Inc. is https://www.immy.com/.
- Address: Immunomycologics, Inc., 2701 Corporate Centre Dr, Norman, OK 73069, USA.
- Phone: The company's contact number is +1 (405) 364-0016.
- Email: For general inquiries, you can reach IMMY via email at info@immy.com.`

const result = await hf.questionAnswering({
    model: model,
    inputs: {
      question: question,
      context: context
    }
  })

console.log(result)
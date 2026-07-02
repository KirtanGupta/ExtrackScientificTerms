import dotenv from "dotenv";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import Groq from "groq-sdk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({
  path: join(__dirname, "..", ".env"),
  override: true,
});

const MODEL = process.env.GROQ_MODEL || "llama-3.1-8b-instant";

function createGroqClient() {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    throw new Error("GROQ_API_KEY is missing. Add it to your .env file.");
  }

  return new Groq({ apiKey });
}

export async function getAIResponse(prompt) {
  const groq = createGroqClient();

  const response = await groq.chat.completions.create({
    model: MODEL,
    messages: [
      { role: "system", content: "You are an assistant that extracts scientific terms from a block of text. When given a document, respond with a list of scientific terms mentioned in the text, separated by commas. Do not add any additional commentary, explanation, or formatting." },
      { role: "user", content: prompt }
    ],
    temperature: 0.2,
  });

  return response.choices[0].message.content;
}

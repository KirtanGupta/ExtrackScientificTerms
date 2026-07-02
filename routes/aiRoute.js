import express from "express";
import { getAIResponse } from "../services/aiService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // log body for debugging
    console.log('api/ai received body:', req.body);

    // support both `text` and legacy `prompt` field
    const text = req.body.text ?? req.body.prompt;

    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return res.status(400).json({ error: "Text is required" });
    }

    const result = await getAIResponse(text);

    res.json({ success: true, output: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
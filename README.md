# Scientific Term Extractor Web App

A simple web interface that lets users paste a document or text and returns the scientific terms contained within it. It uses the Groq LLM API behind an Express backend.

## Features
- Paste any text/document
- Extracts and lists scientific terms only
- Backend API integration with Groq
- Minimal, text‑focused frontend

## Tech Stack
- Node.js
- Express.js
- Groq API
- Plain HTML + JavaScript

## Setup Instructions

1. Clone the repository
2. Run: `npm install`
3. Create a `.env` file
4. Add:
   ```
   GROQ_API_KEY=your_key_here
   ```
5. Start server:
   ```
   node server.js
   ```
6. Visit:
   `http://localhost:5000` and paste your text to extract terms.

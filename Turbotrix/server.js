// Simple Express proxy for Google Gemini API
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const PORT = 3001;

const GEMINI_API_KEY = 'AIzaSyAxmBwqkuo0Vf_URKF6q2wFgwGAqjPLhKE';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

app.use(cors());
app.use(express.json());

app.post('/api/gemini', async (req, res) => {
    try {
        const userMessage = req.body.message;
        const body = {
            contents: [{ parts: [{ text: userMessage }] }]
        };
        const response = await fetch(GEMINI_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
            const text = data.candidates[0].content.parts.map(p => p.text).join(' ');
            res.json({ text });
        } else {
            res.json({ text: 'Sorry, I could not get a response from Gemini.' });
        }
    } catch (error) {
        res.status(500).json({ text: 'Error contacting Gemini API.' });
    }
});

app.listen(PORT, () => {
    console.log(`Gemini proxy server running on http://localhost:${PORT}`);
});

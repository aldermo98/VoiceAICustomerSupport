const axios = require("axios");
const { ELEVENLABS_API_KEY } = require("../utils/env");

async function synthesizeSpeech(text) {
  const voiceId = "your_elevenlabs_voice_id"; // Replace with your ElevenLabs voice ID
  const response = await axios.post(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
    { text },
    { headers: { Authorization: `Bearer ${ELEVENLABS_API_KEY}` }, responseType: "arraybuffer" }
  );
  return response.data; // Returns audio data
}

module.exports = { synthesizeSpeech };
const { config } = require("dotenv");
config();

module.exports = {
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY,
  HIGHLEVEL_API_KEY: process.env.HIGHLEVEL_API_KEY,
  FROM_PHONE_NUMBER: process.env.FROM_PHONE_NUMBER,
};
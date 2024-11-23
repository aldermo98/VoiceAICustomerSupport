const twilio = require("twilio");
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, FROM_PHONE_NUMBER } = require("../utils/env");

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

async function createCall(to, speechUrl) {
  const call = await client.calls.create({
    from: FROM_PHONE_NUMBER,
    to: to,
    twiml: `<Response><Play>${speechUrl}</Play><Gather input="speech" action="/processResponse"></Gather></Response>`,
  });

  return call.sid;
}

module.exports = { createCall };
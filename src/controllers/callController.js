const { synthesizeSpeech } = require("../services/voicecall");
const { createCall: createTwilioCall } = require("../services/callRouter");
const { saveToHighLevel } = require("../services/crm");

async function createCall() {
  try {
    const conversation = await Conversation.startSession({
      agentId: "lNgyv6JkE0UMPD1NFTEF",
    });
    


  } catch (error) {
    console.error("Error creating call:", error);
  }
}

async function processResponse(speechText) {
  try {
    const aiResponse = await generateResponse(`The user said: "${speechText}". How should I respond?`);
    const speechAudio = await synthesizeSpeech(aiResponse);

    const appointmentDetails = {
      name: "John Doe", // Parse from AI response
      phone: "+19163901005", // Replace with actual phone number
      appointment_date: "2024-11-18", // Example: Extract from AI response
    };
    await saveToHighLevel(appointmentDetails);

    console.log("Appointment saved successfully!");
  } catch (error) {
    console.error("Error processing response:", error);
  }
}

module.exports = { createCall, processResponse };
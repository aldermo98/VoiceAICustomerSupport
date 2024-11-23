const axios = require("axios");
const { HIGHLEVEL_API_KEY } = require("../utils/env");

async function saveToHighLevel(data) {
  await axios.post(
    "https://api.gohighlevel.com/v1/contacts/",
    data,
    { headers: { Authorization: `Bearer ${HIGHLEVEL_API_KEY}` } }
  );
}

module.exports = { saveToHighLevel };
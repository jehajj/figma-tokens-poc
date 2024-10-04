const fs = require("fs");
const axios = require("axios");

const STRAPI_API_URL = process.env.STRAPI_API_URL;
const STRAPI_API_KEY = process.env.STRAPI_API_KEY;

async function syncWithStrapi() {
  try {
    // Load the JSON file (you can customize the file path)
    const data = fs.readFileSync("./tokens.json", "utf8");

    // Sync with Strapi via POST API
    const response = await axios({
      method: "put",
      url: `${STRAPI_API_URL}/figma-tokens/1`,
      headers: {
        Authorization: `Bearer ${STRAPI_API_KEY}`,
        "Content-Type": "application/json",
      },
      data: { tokens: data },
    });

    console.log("Sync successful:", response.data);
  } catch (error) {
    console.error("Error syncing with Strapi:", error);
  }
}

syncWithStrapi();

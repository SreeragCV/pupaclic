const Typesense = require("typesense");
require("dotenv").config();

const client = new Typesense.Client({
  nodes: [
    {
      host: process.env.TYPESENSE_HOST,
      port: process.env.TYPESENSE_PORT,
      protocol: "https",
    },
  ],
  apiKey: process.env.TYPESENSE_ADMIN_API_KEY,
  connectionTimeoutSeconds: 2,
});

module.exports = client;
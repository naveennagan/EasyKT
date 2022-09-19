const { Client } = require("@elastic/elasticsearch");

const API_KEY = "MnV6NFZJTUJlT3F6dk1HM19yLXU6aTllamVBYTJSdTZwQTBhMllHc0F5dw==";

module.exports = {
  elasticClient: new Client({
    auth: { apiKey: API_KEY },
    node: "https://9d90373801d544739b121123be106034.us-central1.gcp.cloud.es.io:443",
  }),
};

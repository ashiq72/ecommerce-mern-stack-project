const app = require("./app");
require("./config/db");
const { serverPort } = require("./secret");

app.listen(serverPort, () => {
  console.log("Server is running");
});

 const app = require("./app");
 const https = require("https");

const PORT  = 4000

const server = https.createServer(app);

server.listen(PORT, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
//install dependencies: $npm install express cors twilio

const express = require("express");
//const path = require("path");
const cors = require("cors");
const twilio = require("twilio");
const serverless = require("serverless-http");

const app = express();

const router = express.Router();
//twilio requirements  -- use dotenv
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH;
const client = new twilio(accountSid, authToken);

//utilize cors, blockes the browser from restricting any data
app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin");
// });

app.use(express.static("dist"));
app.use("/.netlify/functions/index", router); //check path again

//welcome page
router.get("/", (req, res) => {
  res.send("Welcome to the Express Server");
});

//twilio text
router.get("/send-text", (req, res) => {
  //_GET variables, passed via query string
  const { recipient, textmessage } = req.query;

  //send text
  client.messages
    .create({
      body: textmessage,
      to: `+1${recipient}`,
      from: "+14023833377", //twilio number /
    })
    .then((message) => console.log(message.body));
});
module.exports.handler = serverless(app);
//set up port to listen
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server is running on port ", port));

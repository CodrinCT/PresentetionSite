const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api running");
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server Running on port: " + `${port}`));

// const contactEmail = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: `${process.env.GMAIL_USER}`,
//     pass: `${process.env.GMAIL_PASS}`,
//   },
// });

const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type:'OAuth2',
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: process.env.GMAIL_USER,
    subject: "Contact",
    html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
      console.log("message sent");
    }
  });
});

module.exports = app;

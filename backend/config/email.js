const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({

  host: "smtp.gmail.com",

  port: 587,

  secure: false,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

});


transporter.verify((error, success) => {

  if (error) {

    console.log("EMAIL ERROR:", error);

  } else {

    console.log("EMAIL SERVER READY");

  }

});


module.exports = transporter;
const nodemailer = require("nodemailer");

const { google } = require("googleapis");

const { OAuth2 } = google.auth;
const oauth_link = "https://developers.google.com/oauthplayground";
const { EMAIL, CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } = process.env;

const auth = new OAuth2(CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, oauth_link);
exports.sendVerificationEmail = (email, name, url) => {
  auth.setCredentials({
    refresh_token: REFRESH_TOKEN,
  });

  const accessToken = auth.getAccessToken();
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: EMAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "Verify your facebook account",
    html: `<div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:Roboto;font-weight:600;color:#3b5990"><img src="./assets/images/logo.png" alt="" style="width:30px"><span>Action Require: Activation your facebook account</span></div><div style="padding:1rem 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;color:#141823;font-size:17px;font-family:Roboto"><span>Hello ${name}</span><div style="padding:1.5rem 0"><span>You recently registered for a Facebook account. To complete your Facebook registration, please confirm your email address by clicking on the button below.</span></div><a style="width:200px;padding:10px 15px;background-color:#4c649b;color:#fff;text-decoration:none;font-weight:600" href=${url}>Confirm Your account</a><br><div style="padding-top:20px"><span style="margin:1.5rem 0">Facebook helps you connect and share with the people in your life.</span></div></div>`,
  };
  smtpTransport.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      console.log("Email sent: " + res.response);
      return res;
    }
  });
};

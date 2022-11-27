import nodemailer from "nodemailer";



/**
 * Send Account activation code
 */
export const sendActivationLink = async (to, data) => {

// create transport
let transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT , 
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MAIL_PASS,
    },
  });



  // send activation mail
  try {
    await transport.sendMail({
      from: `Facebook Pro <${process.env.MAIL_ID}>`,   
      subject: "Account Activation",
      to: to,
      html: ` 
      <div style=" background-color: bisque;
      padding: 20px;">
    <div>
    <h2>Dear ${data.name}</h2>
    <h2>Code ${data.code}</h2>
        <a href="${data.link}">Check activation Link</a>
    </div>
</div>


      
      `
    });
  } catch (error) {
    console.log(error);
  }
};



/**
 * Send password reset link
 */
export const sendPasswordForgotLink = async (to, data) => {

// create transport
let transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT , 
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MAIL_PASS,
    },
  });



  // send activation mail
  try {
    await transport.sendMail({
      from: `Facebook Pro <${process.env.MAIL_ID}>`,   
      subject: "Password reset",
      to: to,
      html: ` 
      <div style=" background-color: bisque;
      padding: 20px;">
    <div>
    <h2>Dear ${data.name}</h2>
    <h2>Code ${data.code}</h2>
        <a href="${data.link}">Change password</a>
    </div>
</div>


      
      `
    });
  } catch (error) {
    console.log(error);
  }
};

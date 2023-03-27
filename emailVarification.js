const nodemailer = require("nodemailer");

async function emailV(email,code){
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "siam.cit.bd@gmail.com", // generated ethereal user
          pass: "oyadomeeqclwqvmk", // generated ethereal password
        },
      });

      let info = await transporter.sendMail({
        from: '"Test Email 👻"', // sender address
        to: email, // list of receivers
        subject: "Registration", 
        html: `<button>${code}</button>`, // html body
      });
}

module.exports = emailV
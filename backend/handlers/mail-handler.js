const nodemailer = require('nodemailer');
const pug = require('pug');
// inlines css
const juice = require('juice');
const htmlToText = require('html-to-text');

const transport = nodemailer.createTransport({
  host:
    process.env.NODE_ENV === 'development'
      ? process.env.MAIL_HOST
      : process.env.MAIL_HOST_PROD,
  port:
    process.env.NODE_ENV === 'development'
      ? process.env.MAIL_PORT
      : process.env.MAIL_PORT_PROD,
  auth: {
    user:
      process.env.NODE_ENV === 'development'
        ? process.env.MAIL_USER
        : process.env.MAIL_USER_PROD,
    pass:
      process.env.NODE_ENV === 'development'
        ? process.env.MAIL_PASS
        : process.env.MAIL_PASS_PROD,
  },
});

const generateHTML = (filename, options = {}) => {
    const html = pug.renderFile(
      `${__dirname}/../templates/${filename}.pug`,
      options
    );
    const inlined = juice(html);
    return inlined;
  };

  exports.send = async (options) => {
    try {
      const html = generateHTML(options.filename, options);
  
      const text = htmlToText.fromString(html);
      const mailOptions = {
        from: `Topkovorking <noreply@topkovorking.ru>`,
        to: options.user.email,
        subject: options.subject,
        html,
        text,
      };
  
      const response = await transport.sendMail(mailOptions);
      return response;
    } catch (err) {
      console.log('send error > ', err);
    }
  };
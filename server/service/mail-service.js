const nodemailer = require('nodemailer');

class MailService {

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    })
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'Account activation for ' + process.env.API_URL,
      text: '',
      html:
        `
            <div>
                <h1>Welcome to the App!</h1>
                <p>You’re just one click away from getting started with App. All you need to do is verify your email address to activate your App account.</p>
                <a href="${link}">
                    <button type="button">Click here!</button>
                </a>
            </div>
        `
    })
  }
}

module.exports = new MailService();
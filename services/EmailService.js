const nodemailer = require('nodemailer');

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'namumovile@gmail.com', 
                pass: 'uqkb hbhl rkdn qlcm' 
            }
        });
    }
    async sendEmail(to, subject, content) {
        const mailOptions = {
            from: 'namumovile@gmail.com', 
            to: to, 
            subject: subject, 
            text: content 
        };
        try {
            const info = await this.transporter.sendMail(mailOptions);
            console.log('Message sent: %s', info.messageId);
        } catch (error) {
            console.error('Error occurred while sending email', error);
        }
    }
}
module.exports = EmailService;

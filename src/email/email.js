import nodemailer from 'nodemailer';

var email = {
    sendEmail: (toEmail, subject, message, callback) => {
        var transporter = nodemailer.createTrasnport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.EMAIL_ID,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        var mailDetails = {
            from: process.env.EMAIL_ID,
            to: toEmail,
            subject: subject,
            html: message
        };

        transporter.sendEmail(mailDetails, (err, data) => {
            if (err) {
                console.log(err);
                callback(false);
            } else {
                console.log('Email Sent Success!!!', data.response);
                callback(true);
            }
        })   
    }
}

module.exports = email;
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
    auth: {
        api_key: '1b7e74b05112d3e47f223fbf4b90666a-c50a0e68-0c13a46e',
        domain: 'littleuniverse7.tech'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email ,subject , text , cb) => {
    const mailOptions = {
        from: email ,
        to: '3codiots777@gmail.com',
        subject, 
        text

    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            cb(err ,null);
        }
        else {
            cb(null ,data);
        }
    });
}

module.exports = sendMail;





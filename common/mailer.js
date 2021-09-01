const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'sarmistha20@navgurukul.org',
        pass: process.env.PASSWORD
    }
});

module.exports.mail = (mailData) => {
    transporter.sendMail(mailData, (err, info) => {
        if(err) {
            // console.log(err.message, "aaaa");
            return err
        } else {
            // console.log(info.messageId,"GGGG");
            return info.messageId
        };
    })
};

// module.exports = mail;

// module.exports.sentMailer = async( req, res, next ) => {
//     const {to, subject, text } = req.body;
//     const mailData = {
//         from: 'sarmistha20@navgurukul.org',
//         to: to,
//         subject: subject,
//         text: text
//     };
//     try{
//         transporter.sendMail(mailData, (err, info) => {
//             if(err) {
//                 return res.status(401).send({
//                     err: err,
//                     status: 401
//                 });
//             } else {
//                 return res.status(200).send({
//                     status: 200,
//                     message: info.messageId
//                 });
//             };
//         })
//     } catch(err) {
//         console.log(err);
//         return res.status(500).send({
//             err: err,
//             status: 500
//         });
//     };
// };
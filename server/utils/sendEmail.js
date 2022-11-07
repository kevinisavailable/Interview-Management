const nodemailer = require('nodemailer')

const sendEmail = async (subject , message , send_to , send_from , reply_to)=>{
    const transporter = nodemailer.createTransport({
        host:process.env.EMAIL_HOST,
        port: 587,
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASSWORD
        },
        tls:{
            rejectUnauthorized:false
        }
    })
    const options = {
        from: send_from,
        to: send_to,
        replyTo:reply_to,
        subject: subject,
        html : message
    }

    transporter.sendMail(options, function(error , info){
        if(error){
            console.log(error)
        }
        else{
            console.log(info)
        }
    })
}

module.exports = sendEmail

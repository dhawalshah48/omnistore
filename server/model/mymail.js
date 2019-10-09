var nodemailer = require('nodemailer');

function sendmail(unm,pass,cb){
    var myurl="http://localhost:3000/loginauthentication/"+unm
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'devil.shah.0411@gmail.com',
            pass: 'devilShah'
        }
    });

    var mailOptions = {
        from: 'devil.shah.0411@gmail.com',
        to: unm,
        subject: 'Confirmation mail for registration',
        html: "<h1>Welcome User To PostKarde.com</h1><br><br><h2>Username: "+unm+"</h2><br><br><h2>Password : "+pass+"</h2><br><h1><a href="+myurl+">Click Here To verify your accout</a></h1>"
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            cb(false)
        } else {
            cb(true)
        }
    });

}
module.exports={sendmail:sendmail}
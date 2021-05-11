const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();

sgMail.setApiKey('SG.Enter your API KEY here');

app.use(cors());

//Welcome Page

app.get('/', (req, res) => {
    res.send('Welcome to the SendGrid Email Server');
});

//email page
app.get('/send-email', (req, res) => {
    //Get variables from query string

    const { recipient, sender, topic, text} = req.query;

    //SendGrid Requirements
    const msg = {
        to : recipient,
        from : sender, 
        subject : topic, 
        text : text,
    }

    //Send Email
    sgMail.send(msg)
    .then((msg) => console.log(text))
})



app.listen(4000, () => console.log("running on port 4000"));


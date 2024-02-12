const express = require('express');
const sendMail = require('./mail');
const path = require("path");
const app = express();
require('./db/conn');
const Contact = require("./models/contact");
const port = 8000;


// data parser
app.use(express.urlencoded({
    extended: false
}));


app.use(express.json());
const asa = (path.join(__dirname, '../public'));
app.use(express.static(asa));


//  get request
app.get('/', (req, res) => {
    res.status(200).render('index.html');
});
app.get('/content', (req, res) => {
    res.status(200).render('content.html');
});
app.post('/content', async (req, res) => {
    try {
        const email = req.body.email;
        const subject = req.body.subject;
        const text = req.body.text;
        if (email, subject, text == true) {
            const data = new Contact({
                email: req.body.email,
                subject: req.body.subject,
                text: req.body.text
            })
            const save = await data.save();
            res.status(201).render(index);
        } else {
            res.send("error");
        }
    } catch (error) {
        res.status(404).send(error);
    }
});


// post request 
app.post('/email', (req, res) => {
    // TODO:
    const { email, subject, text } = req.body;
    console.log('data :', req.body);
    sendMail(email, subject, text, function (err, data) {
        if (err) {
            res.status(404).json({ message: 'internal error' });
        } else {
            res.json({ message: 'Email Sent !!!' })
        }
    });
});

app.listen(port, () => {
    console.log(`server is listenning on port 8000`);
});

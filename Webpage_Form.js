//server side code for form submission using node.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; //port being used

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Contact.html'); // send HTML file on GET request
});
app.post('/submit-form', (req, res) => {
//used to display the username that was used
    const Name = req.body.Name; // access form data
    res.send(`Username is ${Name}`);
//used to display the email that was used
    const Email = req.body.Email; // access form data
    res.send(`Email is ${Email}`);
//used to display the phone number that was used
    const Phone = req.body.Phone; // access form data
    res.send(`Phone number is ${Phone}. I've recieved your info and I'll be in touch soon.`);
});
//Shows the website that the server is running on
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
//server side code for form submission using node.js
const express = require('express');
const app = express();
const port = 3000; //port being used

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Contact.html'); // send HTML file on GET request
});
app.post('/submit-form', (req, res) => {
        const Name = req.body.Name; // access form data
        const Email = req.body.Email;
        const Phone = req.body.Phone;
    //Used to display the username, Email, and Phone Number that was used
        res.send(`Username is ${Name}, Email is ${Email}, Phone number is ${Phone}. I've received your info and I'll be in touch soon.`);
    });
//Shows the website that the server is running on
app.listen(port, () => {
    console.log(`Server running on https://briley365.github.io/web-development-project/${port}`);
});
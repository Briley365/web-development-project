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
    console.log(`Server running on http://localhost:${port}`);
});

//Form validation 
const form = document.getElementById('form');
const Name = document.getElementById('Name');
const Email = document.getElementById('Email');
const Phone = document.getElementById('Phone');
const Name_error = document.getElementById('Name_error');
const Email_error = document.getElementById('Email_error');
const Phone_error = document.getElementById('Phone_error');

//used to prevent form from submitting
form.addEventListener('submit', function(e) {
    e.preventDefault();
    //Form validation for Name, Email, and Phone number.
    var Email_check = /^([A-Za-z0-9_|-|.])+|@([A-Za-z0-9_1-1.])+\ ([A-Za-z]{2,4})$/;

    if(Name.value === "" || Name.value == null){
        Name_error.innerHTML = "You must submit a name.";
    }
    if (!Email.value.match(Email_check)){
        Email_error.innerHTML = "Valid email is needed. ";
        return false;
    }
    if(Phone.length == 0){
        Phone_error.innerHTML = 'Phone # is required.' 
        return false;
    }
    if(Phone.value.length != 10){
        Phone_error.innerHTML = 'Phone # should be 10 digits long.' 
        return false;
    }
    if(!Phone.match(/^[0-9]{10}$/)){
        Phone_error.innerHTML = 'Phone # is required.' 
        return false;
    }

}
);

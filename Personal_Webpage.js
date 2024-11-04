// Image slideshow code
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length>0){

    slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}
function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length -1;
    }
    slides.forEach(slide =>{
        slide.classList.remove("displaySlide")
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);

}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

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

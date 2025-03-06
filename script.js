function validateAndstoredata(){
const name = document.getElementById('name').Value;
const email = document.getElementById('email').Value;
const phonenumber = document.getElementById('phonenumber').Value;
const password = document.getElementById('password').Value;
const confirmpassword = document.getElementById('confirmpassword').Value;
const grecaptcha = getElementsById ('grecaptcha').value;

    

// simple validation //
if  (!grecaptcha === ''){
    alert('Please fill in all fields');
    return;
// simple validation //
if  (name === '' || email === '' ||  password === '' || confirmpassword === ''){
    alert('Please fill in all fields');
    return;
}

// Store data in all local storage 
    localStorage.setItem('name', name);
    localStorage.setItem("email", email);
    localStorage.setItem("phonenumber", phonenumber);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmpassword", confirmpassword);

}
document.getElementById('submit')
addEventListener('click' ,storeuserdata);{
document.getElementById('submitted')
addEventListener('click',loaduserdata)
}

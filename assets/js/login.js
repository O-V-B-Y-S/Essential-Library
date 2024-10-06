
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink=document.querySelector('.login-link');
const btnPopUp=document.querySelector('.btn-login');
const closeBtn=document.querySelector('.icon-close')
const log=document.querySelector('.log');
// registerLink.addEventListener('click', function(event) {
//     event.preventDefault();  
//     wrapper.classList.add('active'); 
// });
loginLink.addEventListener('click', function(event) {
    event.preventDefault();  
    wrapper.classList.remove('active'); 
});
registerLink.addEventListener('click', function(event) {
    event.preventDefault();  
    wrapper.classList.add('active'); 
});
btnPopUp.addEventListener('click', function(event) {
    event.preventDefault(); 
    log.style.display="flex" 
    // log.style.align.item="center";
    wrapper.classList.add('active-popup'); 
});
closeBtn.addEventListener('click', function(event) {
    event.preventDefault();  
    wrapper.classList.remove('active-popup'); 
    log.style.display="none"
});


var signUp = document.getElementById('signupForm');

signUp.addEventListener('click', function(event) {
    event.preventDefault();
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;
    let userName = document.getElementById('signupUsername').value;
    // Store user data in local storage
    localStorage.setItem("Userpassword", password);
    localStorage.setItem("Useremail", email);
    localStorage.setItem("UserName", userName);
    email = document.getElementById('signupEmail').value="";
    password = document.getElementById('signupPassword').value="";
    userName = document.getElementById('signupUsername').value="" ;
    alert("You're Successfully siginup,Please login and watch the page")
    // document.getElementById('message').textContent = 'Sign Up Successful!';
    wrapper.classList.remove('active'); 

});

var signIn = document.getElementById('signinForm');
signIn.addEventListener('click', function(event) {
    event.preventDefault();
    let email = document.getElementById('signinEmail').value;
    let password = document.getElementById('signinPassword').value;
    // Retrieve user data from local storage
    const storedPassword = localStorage.getItem("Userpassword");
    const storedEmail = localStorage.getItem("Useremail");
    if (
        storedPassword &&
        storedPassword === password &&
        storedEmail &&
        storedEmail === email
         ) {
            alert('Login Successfully!')
            email = document.getElementById('signinEmail').value='';
            password = document.getElementById('signinPassword').value='';
            // document.getElementById('message').textContent = 'Sign In Successful!';
            window.location.href='./main.html'
    } else if(
            storedPassword !== password &&
            storedEmail !== email
        ){
        alert("You don't have account,Please signup");
        email = document.getElementById('signinEmail').value='';
        password = document.getElementById('signinPassword').value='';
    }
    else{
        alert("Invalid username or password!");
        email = document.getElementById('signinEmail').value='';
        password = document.getElementById('signinPassword').value='';
    }
    document.getElementById('signinForm').reset();
});

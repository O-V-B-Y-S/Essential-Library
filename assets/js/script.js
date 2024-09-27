
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink=document.querySelector('.login-link');
const btnPopUp=document.querySelector('.btn-login');
const closeBtn=document.querySelector('.icon-close')

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
    wrapper.classList.add('active-popup'); 
});
closeBtn.addEventListener('click', function(event) {
    event.preventDefault();  
    wrapper.classList.remove('active-popup'); 
});


var signUp = document.getElementById('signupForm');

signUp.addEventListener('submit', function(event) {
    // event.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const userName = document.getElementById('signupUsername')
    // Store user data in local storage
    localStorage.setItem("userpassword", password);
    localStorage.setItem("useremail", email);
    localStorage.setItem("userName", userName);
    // document.getElementById('message').textContent = 'Sign Up Successful!';
    document.getElementById('signupForm').reset();
});

var signIn = document.getElementById('signinForm');
signIn.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signinUsername').value;
    const password = document.getElementById('signinPassword').value;
    // Retrieve user data from local storage
    const storedPassword = localStorage.getItem(password);
    if (storedPassword && storedPassword === password) {
        document.getElementById('message').textContent = 'Sign In Successful!';
        window.location.href='./main.html'
    } else {
        document.getElementById('message').textContent = 'Invalid username or password!';
    }
    document.getElementById('signinForm').reset();
});


// Toggle the side navigation
function toggleMenu() {
    const sideNav = document.getElementById('side-nav');
    const mainContent = document.getElementById('main-content');

    // Check if the sidebar is open
    if (sideNav.classList.contains('side-nav-open')) {
        // Hide the sidebar by removing the open class
        sideNav.classList.remove('side-nav-open');
        mainContent.classList.remove('main-content-open');
    } else {
        // Show the sidebar by adding the open class
        sideNav.classList.add('side-nav-open');
        mainContent.classList.add('main-content-open');
    }
}

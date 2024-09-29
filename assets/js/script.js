
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

    // Toggle sidebar visibility
    if (sideNav.classList.contains('side-nav-open')) {
        sideNav.classList.remove('side-nav-open');
        if (mainContent) {
            mainContent.classList.remove('main-content-open');
        }
    } else {
        sideNav.classList.add('side-nav-open');
        if (mainContent) {
            mainContent.classList.add('main-content-open');
        }
    }
}

// Toggle the visibility of book types
function showBookTypes(event) {
    event.preventDefault();  // Prevent default anchor behavior
    const bookTypes = document.getElementById('book-types');
    
    // Toggle the hidden class to show/hide book types
    if (bookTypes.classList.contains('hidden')) {
        bookTypes.classList.remove('hidden');
    } else {
        bookTypes.classList.add('hidden');
    }
}

// Placeholder search function
function searchBooks() {
    const searchInput = document.getElementById('search').value;
    alert(`Searching for: ${searchInput}`);
}

// Ensure DOM content is loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    const booksMenu = document.querySelector('[onclick="showBookTypes()"]');
    booksMenu.addEventListener('click', showBookTypes);
});


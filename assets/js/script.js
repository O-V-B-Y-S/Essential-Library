

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
}};
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

// Ensure DOM content is loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    const booksMenu = document.querySelector('[onclick="showBookTypes()"]');
    booksMenu.addEventListener('click', showBookTypes);
});
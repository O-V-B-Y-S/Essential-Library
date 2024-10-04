

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




// readMore function

function readMore(){
    var btnText=this;
    var es=btnText.previousElementSibling;

    if(es.style.display==="none" || es.style.display===""){
        es.style.display="inline";
        btnText.innerHTML="ReadLess"
        btnText.style.color="brown"
    }
    else{
        es.style.display="none";
        btnText.innerHTML="ReadMore"
        btnText.style.color=""
    }
};
window.onload = function () {
    var moreTexts = document.querySelectorAll(".moreText");
    var readMoreBtns = document.querySelectorAll(".readMore");

    moreTexts.forEach(function (moreText) {
      moreText.style.display = "none";
    });

    readMoreBtns.forEach(function (btn) {
      btn.addEventListener("click", readMore);
    });
};

function slideshow() {
    // clone
    $('.slider-1').clone().removeClass('slider-1').addClass('slider-2').insertAfter($('.slider'));
  
    // set first
    $('.slider-1').slick({
      draggable: false,
      dots: false,
      infinite: true,
      responsive: true,
      asNavFor: '.slider-2',
      touchThreshold: 20,
      speed: 1000,
      fade: true
    });
  
    // set second
    $('.slider-2').slick({
      dots: true,
      infinite: true,
      responsive: true,
      asNavFor: '.slider-1',
      arrows: false,
      speed: 1000,
      easing: 'easeInOutQuart'
    });
  }
  
  $(function() {
    slideshow();
    setTimeout(function() {
      $('.slider-1 .slick-next').click();
    }, 1000);
});
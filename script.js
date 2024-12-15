
//for auto hide slidebar on click

document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.getElementById('hamburger');
    const navbarLinks = document.getElementById('nav-links');
    const navItems = navbarLinks.querySelectorAll('a'); // Select all navigation links
  
    // Toggle menu visibility
    navbarToggle.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });
  
    // Hide menu when a link is clicked
    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        navbarLinks.classList.remove('active');
      });
    });
  });
  







  

  document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    // Function to change to the next slide
    function changeSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Update the current index
        currentIndex = (index + slides.length) % slides.length;

        // Add active class to the new slide
        slides[currentIndex].classList.add('active');
    }

    // Event listener for each slide to change when clicked
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            changeSlide(index + 1);
        });
    });

    // Function for automatic slide change every 4 seconds
    function autoSlide() {
        setInterval(() => {
            changeSlide(currentIndex + 1);
        }, 1000); // Change slide every 4 seconds
    }

    // Initialize the slider with the first slide active
    changeSlide(currentIndex);
    autoSlide();
});






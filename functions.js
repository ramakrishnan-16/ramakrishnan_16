// Index Page

// document.addEventListener('DOMContentLoaded', function() {
//     console.log('DOM fully loaded and parsed');
//     setTimeout(function() {
//     }, 3000);
// });

// Navigation Bar

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.navigation-bar-menu');
    const navLinks = document.querySelectorAll('.navigation-bar-buttons a');
    const menuCloseButton = document.getElementById('menu-close');
  
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 20) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
    });
  
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
  
    menuCloseButton.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
  
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
  });

// Home Section

document.addEventListener("DOMContentLoaded", function() {
    const typingEffect = document.querySelector('.typing-effect');
    const words = ["Ramakrishnan", "a Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = '';
    let isDeleting = false;

    function type() {
        if (isDeleting) {
            if (charIndex > 0) {
                charIndex--;
                currentWord = words[wordIndex].substring(0, charIndex);
                typingEffect.innerHTML = currentWord;
                setTimeout(type, 100);
            } else {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500);
            }
        } else {
            if (charIndex < words[wordIndex].length) {
                currentWord = words[wordIndex].substring(0, charIndex + 1);
                typingEffect.innerHTML = currentWord;
                charIndex++;
                setTimeout(type, 200);
            } else {
                isDeleting = true;
                setTimeout(type, 1000);
            }
        }
    }

    type();
});

// Skills Section

document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        const percentage = circle.getAttribute('data-percentage');
        circle.style.setProperty('--percentage', percentage);
    });
});


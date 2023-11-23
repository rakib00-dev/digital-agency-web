const navBar = document.querySelector('nav');
const navBarLink = document.querySelectorAll('.scroll-link');
const logo = document.querySelector('#logo-scroll');
const navButton = document.querySelector('#nav-button-scroll');
const skills = document.querySelector('#service-boxes');
const aboutUs = document.querySelector('#about-us');
const progress1 = document.querySelector('.progress1');
const progress2 = document.querySelector('.progress2');
const progress3 = document.querySelector('.progress3');

window.addEventListener('scroll', () => {
  const scrolling = window.scrollY;
  const numPlus = 44;
  const numMinus = 28;

  if (scrolling >= numPlus) {
    navBar.classList.add('navBarScrolling');

    logo.style.color = '#6222cc';
    navBarLink.forEach((link) => {
      link.style.color = 'black';
    });
    navButton.style.backgroundColor = '#fba504';
  } else if (scrolling <= numMinus) {
    navBar.classList.remove('navBarScrolling');
    logo.style.color = null;
    navBarLink.forEach((link) => {
      link.style.color = '';
    });
    navButton.style.background = null;
  }

  // skills section
  {
    if (scrolling >= 625) {
      skills.style.bottom = '0';
    } else {
      skills.style.bottom = null;
    }
  }

  // about us section
  {
    if (scrolling >= 1180) {
      progress1.classList.add('prog1');
      progress2.classList.add('prog2');
      progress3.classList.add('prog3');
    } else {
      progress1.classList.remove('prog1');
      progress2.classList.remove('prog2');
      progress3.classList.remove('prog3');
    }
  }
});

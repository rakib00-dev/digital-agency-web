const navBar = document.querySelector('nav');
const navBarLink = document.querySelectorAll('.scroll-link');
const logo = document.querySelector('#logo-scroll');
const navButton = document.querySelector('#nav-button-scroll');
const skills = document.querySelector('#service-boxes');

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
    if (scrolling >= 615) {
      skills.style.top = '0';
      skills.style.opacity = 1;
      // skills.style.transform = 'scaleY(1)';
    } else if (scrolling <= 615) {
      skills.style.opacity = null;
      skills.style.top = null;
    }
  }
});

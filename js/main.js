const navBar = document.querySelector('nav');
const navBarLink = document.querySelectorAll('.scroll-link');
const logo = document.querySelector('#logo-scroll');
const navButton = document.querySelector('#nav-button-scroll');

window.addEventListener('scroll', () => {
  const scrolling = window.scrollY;
  const numPlus = 44;
  const numMinus = 28;

  // nav bar section
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
      link.style.color = null;
    });
    navButton.style.background = null;
  }

  // service section
  {
    const service = document.querySelectorAll('.service-box');

    if (scrolling >= 625) {
      service.forEach((skills) => {
        skills.style.bottom = '0';
        skills.style.opacity = '1';
      });
    } else {
      service.forEach((skills) => {
        skills.style.bottom = null;
        skills.style.opacity = null;
      });
    }
  }

  // about us section
  {
    const aboutUsText = document.querySelector('#about-us-left');
    const aboutUsImg = document.querySelector('#about-scroll');
    const progress1 = document.querySelector('.progress1');
    const progress2 = document.querySelector('.progress2');
    const progress3 = document.querySelector('.progress3');

    if (scrolling >= 925) {
      aboutUsText.style.left = '0';
      aboutUsImg.style.right = '0';
    } else {
      aboutUsText.style.left = null;
      aboutUsImg.style.right = null;
    }

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

  // main showcase section
  {
    const mainShowcaseBox = document.querySelectorAll('.main-showcase-box');
    const mainShowcase = document.querySelector('#main-showcase');
    const nums = document.querySelectorAll('#numbers');
    let counter = 0;

    if (scrolling >= 1846) {
      mainShowcaseBox.forEach((pBox) => {
        pBox.style.opacity = '1';
      });
      mainShowcase.style.opacity = '1';
      mainShowcase.style.marginBottom = '0';
    } else {
      mainShowcaseBox.forEach((pBox) => {
        pBox.style.opacity = null;
      });

      mainShowcase.style.opacity = null;
      mainShowcase.style.marginBottom = null;
    }
    if (scrolling == 1840) {
      setInterval(() => {
        if (counter === 1234) {
          nums.forEach(() => {
            clearInterval();
          });
        } else {
          counter += 1;
          nums.forEach((nums) => {
            nums.innerHTML = counter;
          });
        }
      }, 1);
    }
  }
});

// main -showcase number 0% to 100%

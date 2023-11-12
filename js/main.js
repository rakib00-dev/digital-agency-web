let navBar = document.querySelector('nav');
let navBarLink = document.querySelectorAll('.scroll-link');
let logo = document.querySelector('#logo-on-scroll');
let navButton = document.querySelector('#scroll-effect');

window.addEventListener('scroll', () => {
  const scrolling = window.scrollY;
  const numPlus = 44;
  const numMinus = 28;

  if (scrolling >= numPlus) {
    navBar.classList.add('navBarScrolling');

    navBarLink.forEach((link) => {
      link.style.color = 'black';
    });

    navButton.style.background = '#fba504';

    // logo.classList.add('scroll-logo-color');
    logo.style.color = '#6222cc';
    console.log('fix');
  } else if (scrolling <= numMinus) {
    navBarLink.forEach((link) => {
      link.style.color = '';
    });
    navBar.classList.remove('navBarScrolling');
    logo.style.color = null;
    navButton.style.background = null;

    console.log('unfixed');
  }
});

// const navBar = document.querySelector('nav');
// const navBarLinks = document.querySelectorAll('.scroll-link');

// window.addEventListener('scroll', () => {
//   const scrolling = window.scrollY;

//   if (scrolling > 0) {
//     navBar.classList.add('navBarScrolling');
//     navBarLinks.forEach(link => {
//       link.classList.add('scroll-a');
//       link.style.color = 'red';
//     });
//   } else if (scrolling === 0) {
//     navBar.classList.remove('navBarScrolling');
//     navBarLinks.forEach(link => {
//       link.classList.remove('scroll-a');
//       link.style.color = '';
//     });
//   }
// });

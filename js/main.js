let navBar = document.querySelector('nav');
let navBarLink = document.querySelectorAll('.scroll-link');
let logo = document.querySelector('#nav-logo');

window.addEventListener('scroll', () => {
  const scrolling = window.scrollY;
  // const numPlus = 44;
  const numPlus = 44;
  const numMinus = 28;

  if (scrolling >= numPlus) {
    navBar.classList.add('navBarScrolling');

    navBarLink.forEach((link) => {
      link.style.color = 'black';
    });
    logo.styel.color = 'blue';
    console.log('fix');
  } else if (scrolling <= numMinus) {
    navBarLink.forEach((link) => {
      link.style.color = '';
    });
    navBar.classList.remove('navBarScrolling');
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

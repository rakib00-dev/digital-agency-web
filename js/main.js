let navBar = document.querySelector('nav');
let navBarLink = document.querySelectorAll('.scroll-link');

window.addEventListener('scroll', () => {
  const scrolling = window.scrollY;
  const numPlus = 44;
  const numNo = 28;

  if (scrolling >= numPlus) {
    navBar.classList.add('navBarScrolling');
    navBarLink.classList.add('scroll-a');
    navBarLink.style.color = 'red';
    console.log('fix');
  } else if (scrolling <= numNo) {
    navBar.classList.remove('navBarScrolling');
    console.log('unfixed');
  }

  // console.log(scrolling);
});

window.addEventListener('scroll', () => {
  const numPlus = 44;
  const numMinus = 0;
  const scrolling = window.scrollY;

  if (scrolling === numPlus) {
    document.querySelector('nav').classList.add('navBarScrolling');
    console.log('fix');
  } else if (scrolling === numMinus) {
    document.querySelector('nav').classList.remove('navBarScrolling');
    console.log('unfixed');
  }
});

const navBar = document.querySelector('nav');
const navBarLink = document.querySelectorAll('.scroll-link');
const logo = document.querySelector('#logo-scroll');
const navButton = document.querySelector('#nav-button-scroll');
const nums = document.querySelectorAll('#numbers');
const subMenu = document.querySelector('#sub-menu');
let counter = 0;

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
    subMenu.style.top = '91%';
    subMenu.style.border = '1px solid #cccccc73';
  } else if (scrolling <= numMinus) {
    navBar.classList.remove('navBarScrolling');
    logo.style.color = null;
    navBarLink.forEach((link) => {
      link.style.color = null;
    });
    navButton.style.background = null;
    subMenu.style.top = null;
    subMenu.style.border = null;
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

    if (scrolling >= 1846) {
      mainShowcaseBox.forEach((pBox) => {
        pBox.style.opacity = '1';
      });
      mainShowcase.style.opacity = '1';
      mainShowcase.style.marginBottom = '0';
    } else {
      mainShowcaseBox.forEach((msBox) => {
        msBox.style.opacity = null;
      });

      mainShowcase.style.opacity = null;
      mainShowcase.style.marginBottom = null;
    }

    // main -showcase number 0% to 100%
    if (window.scrollY >= 1800) {
      setInterval(() => {
        if (counter == 1900) {
          nums.forEach(() => {
            clearInterval();
          });
        } else {
          counter += 1;
          nums.forEach((nums) => {
            nums.innerHTML = counter;
          });
        }
      }, 10);
    }
  }

  // provide section
  {
    const provideSection = document.querySelector('#provide-section');
    const provideBox1 = document.querySelectorAll('#pBox1');
    const provideBox2 = document.querySelectorAll('#pBox2');
    const provideBox3 = document.querySelectorAll('#pBox3');
    const provideBox4 = document.querySelectorAll('#pBox4');
    const provideBox5 = document.querySelectorAll('#pBox5');
    const provideBox6 = document.querySelectorAll('#pBox6');

    if (scrolling >= 2100) {
      provideSection.style.bottom = '0';
    } else {
      provideSection.style.bottom = null;
    }
    if (scrolling >= 2300) {
      provideBox1.forEach((pBox) => {
        pBox.style.opacity = '1';
        pBox.style.bottom = '0';
      });
      provideBox3.forEach((pBox) => {
        pBox.style.opacity = '1';
        pBox.style.bottom = '0';
      });
      provideBox5.forEach((pBox) => {
        pBox.style.opacity = '1';
        pBox.style.bottom = '0';
      });
    } else {
      provideBox1.forEach((pBox) => {
        pBox.style.opacity = null;
        pBox.style.bottom = null;
      });
      provideBox3.forEach((pBox) => {
        pBox.style.opacity = null;
        pBox.style.bottom = null;
      });
      provideBox5.forEach((pBox) => {
        pBox.style.opacity = null;
        pBox.style.bottom = null;
      });
    }
    if (scrolling >= 2666) {
      provideBox2.forEach((pBox) => {
        pBox.style.opacity = '1';
        pBox.style.bottom = '0';
      });
      provideBox4.forEach((pBox) => {
        pBox.style.opacity = '1';
        pBox.style.bottom = '0';
      });
      provideBox6.forEach((pBox) => {
        pBox.style.opacity = '1';
        pBox.style.bottom = '0';
      });
    } else {
      provideBox2.forEach((pBox) => {
        pBox.style.opacity = null;
        pBox.style.bottom = null;
      });
      provideBox4.forEach((pBox) => {
        pBox.style.opacity = null;
        pBox.style.bottom = null;
      });
      provideBox6.forEach((pBox) => {
        pBox.style.opacity = null;
        pBox.style.bottom = null;
      });
    }
  }

  // newsletter section
  {
    const newsletter = document.querySelector('#newsletter');

    if (scrolling >= 3132) {
      newsletter.style.bottom = '0';
    } else {
      newsletter.style.bottom = '-120px';
    }
  }

  // our project section
  {
    const projectTitle = document.getElementById('projects');

    if (scrolling >= 3880) {
      projectTitle.style.opacity = '1';
      projectTitle.style.bottom = 0;
    } else {
      projectTitle.style.opacity = null;
      projectTitle.style.bottom = '-65px';
    }
  }
});

// Data filter in project section
const filterList = document.querySelectorAll('#data-list');
const filterItems = document.querySelectorAll('[data-item]');
const dataFilter = document.querySelectorAll('[data-filter]');

for (let i = 0; i < filterList.length; i++) {
  filterList[i].addEventListener('click', filter);
}

function filter() {
  for (let o = 0; o < filterList.length; o++) {
    filterList[o].classList.remove('active');
  }
  this.classList.add('active');
}

// project section first child 'all'
filterList[0].onclick = () => {
  for (a = 0; a < filterItems.length; a++) {
    filterItems[a].classList.add('active2');
    filterItems[a].classList.remove('hide2');
  }
  console.log('ok0');
};

// project section first child 'web-design'
filterList[1].onclick = () => {
  for (a2 = 0; a2 < filterItems.length; a2++) {
    if (filterItems[a2].dataset.item == dataFilter[1].dataset.filter) {
      filterItems[a2].classList.add('active2');
      filterItems[a2].classList.remove('hide2');
    } else {
      filterItems[a2].classList.add('hide2');
      filterItems[a2].classList.remove('active2');
    }
  }
  console.log('ok2');
};

// project section first child 'graphic-design'
filterList[2].onclick = () => {
  for (a3 = 0; a3 < filterItems.length; a3++) {
    if (filterItems[a3].dataset.item == dataFilter[2].dataset.filter) {
      filterItems[a3].classList.add('active2');
      filterItems[a3].classList.remove('hide2');
    } else {
      filterItems[a3].classList.add('hide2');
      filterItems[a3].classList.remove('active2');
    }
  }
  console.log('ok3');
};

// for (let o = 0; o < filterList.length; o++) {
//   filterList[o].classList.remove('active');
// }
// this.classList.add('active');
// //prob
// for (let u = 0; u < filterItems.length; u++) {
//   filterItems[u].classList.add('hide');
//   filterItems[u].classList.remove('active');
//   if (filterItems[u].dataset.item == 'graphic-design') {
//     filterItems.classList.add('active');
//     filterItems.classList.remove('hide');
//   }
//   if (filterItems[u].dataset.item == 'web-design') {
//     filterItems.classList.add('active');
//     filterItems.classList.remove('hide');
//   }
//   this.classList.remove('hide');
// }
////////////////////////copy
// for (let u = 0; u < filterItems.length; u++) {
//   filterItems[u].classList.add('hide2');
//   filterItems[u].classList.remove('active2');
//   if (
//     filterItems[u].querySelectorAll('[data-item]') == dataFilter ||
//     dataFilter == 'all'
//   ) {
//     filterItems[u].classList.add('active2');
//     filterItems[u].classList.remove('hide2');
//   }
//   this.classList.add('hide2');
// }
//}

let x = window.innerHeight;

// setInterval(() => {
//   console.log(x);
// }, 10);

//(MENU NAV TOGGLE------------------------------)
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('left');
    menuBody.classList.toggle('left');

  });
}

//(MENU NAV TOGGLE------------------------------)



//(DATA-PARALLAX-MOUSE--------------------------)

let applyParallax = section => {

  section.addEventListener('mousemove', e => {

    let { width, height } = section.getBoundingClientRect();
    let offX = e.pageX - (width * 0.5);
    let offY = e.pageY - (height * 0.5);

    for (let layer of document.querySelectorAll('.parallax')) {
      const speed = layer.getAttribute('data-speed')
      const x = (offX * speed) / 100;
      const y = (offY * speed) / 100;
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    }

  });
  section.addEventListener('mouseleave', e => {

    for (let layer of document.querySelectorAll('.parallax')) {
      layer.style.transform = `translateX(0px) translateY(0px)`
    }

  });

};
applyParallax(document.querySelector('section'));

//(DATA-PARALLAX-MOUSE--------------------------)





//(SCROLL-HEADER--------------------------------)

let didScroll = false;
const header = $('#header');
const logo = $('#opacity');

// Detect scroll event
$(window).on('scroll', function () {
  didScroll = true;
});

// Used for throttling to improve performance
setInterval(function () {
  if (didScroll) {
    didScroll = false;

    if ($(window).scrollTop() > 0) {
      header.addClass('scrolled');
      logo.addClass('opacity');
    } else {
      header.removeClass('scrolled');
      logo.removeClass('opacity');
    }
  }
});

//(SCROLL-HEADER--------------------------------)




//(SPOLLERS-------------------------------------)

$(document).ready(function (event) {
  $('.spoller__slide').click(function (event) {
    $(this).toggleClass('smooth').next().slideToggle(300);
  });
});

//(SPOLLERS-------------------------------------)


//(Scrolling Animation with Vanilla JavaScript--)

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("animation");
    } else {
      reveals[i].classList.remove("animation");
    }
  }
}

window.addEventListener("scroll", reveal);

//(Scrolling Animation with Vanilla JavaScript--)

//(SMOOTH SCROLL-------------------------------)
const menuLinks = document.querySelectorAll('.menu__link[data-scroll]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {
      const scrollBlock = document.querySelector(menuLink.dataset.scroll);
      const scrollBlockValue = scrollBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      if (iconMenu.classList.contains('left')) {
        document.body.classList.remove('lock');
        iconMenu.classList.remove('left');
        menuBody.classList.remove('left');
      }

      window.scrollTo({
        top: scrollBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}

//(SMOOTH SCROLL-------------------------------)

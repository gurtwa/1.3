document.addEventListener('keydown', function(event) {
  if (event.key === 'Tab' || event.keyCode === 9) {
      let focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
      focusableElements = Array.from(focusableElements).filter(element => !element.closest('.header').classList.contains('header--hidden') && element.offsetParent !== null);
      let currentFocus = document.activeElement;
      let index = focusableElements.indexOf(currentFocus);

      if (event.shiftKey) {
          index--;
      } else {
          index++;
      }

      if (index >= focusableElements.length) {
          index = 0;
      }
      if (index < 0) {
          index = focusableElements.length - 1;
      }
      
      focusableElements[index].focus();
      event.preventDefault();
  }
});

window.addEventListener('resize', function() {
  const header = document.querySelector('.header');
  const headerRect = header.getBoundingClientRect();
  const isHeaderHidden = headerRect.top + headerRect.height < 0 || headerRect.bottom < 0;

  if (isHeaderHidden) {
      header.classList.add('header--hidden');
  } else {
      header.classList.remove('header--hidden');
  }
});

function scrollMenu(event) {
  const menu = document.getElementById('menu');
  const menuWidth = menu.offsetWidth;
  const mouseX = event.clientX - menu.getBoundingClientRect().left;

  if (mouseX < menuWidth / 4) {
    menu.scrollLeft -= 10;
  } else if (mouseX > (menuWidth * 3) / 4) {
    menu.scrollLeft += 10;
  }
}

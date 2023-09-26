// Модуль отвечает за переключение мобильного меню

const toggleMobileMenu = () => {
  const header = document.querySelector('.header');
  const body = document.querySelector('body')

  if (!header) {
    return;
  }

  const toggleMenuBtn = header.querySelector('.main-nav__toggle');

  toggleMenuBtn.addEventListener('click', () => {
    if (header.classList.contains('is-open')) {
      header.classList.remove('is-open');
      body.style.overflow = 'scroll';
    } else {
      header.classList.add('is-open');
      body.style.overflow = 'hidden';
    }
  });


};

export {toggleMobileMenu};

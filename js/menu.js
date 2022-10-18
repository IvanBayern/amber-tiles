(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileBodyRef = document.querySelector('[body]');

  const expanded = Boolean(menuBtnRef.getAttribute('aria-expanded'));
  const viewPortWidth = document.documentElement.clientWidth;

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', String(!expanded));

    mobileMenuRef.classList.toggle('is-open');
    mobileBodyRef.classList.toggle('body-fixed');
  });

  mobileMenuRef.addEventListener('click', () => {
    console.log(viewPortWidth);
    if (viewPortWidth < 768) {
      menuBtnRef.classList.toggle('is-open');
      menuBtnRef.setAttribute('aria-expanded', String(!expanded));

      mobileMenuRef.classList.toggle('is-open');
      mobileBodyRef.classList.toggle('body-fixed');
    }
  });
})();

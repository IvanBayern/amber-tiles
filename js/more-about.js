(() => {
  const refs = {
    openMoreAboutBtn: document.querySelector('[btn-more-about]'),
    closeMoreAboutBtn: document.querySelector('[btn-close-more-about]'),
    moreAbout: document.querySelector('[more-about-open]'),
  };

  refs.openMoreAboutBtn.addEventListener('click', toggleModal);
  refs.closeMoreAboutBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.moreAbout.classList.toggle('is-open');
  }
})();

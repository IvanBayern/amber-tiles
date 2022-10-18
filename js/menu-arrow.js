const trueCallback = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      target.classList.add('is-visible');
    } else {
      target.classList.remove('is-visible');
    } // intersecting: true or false
  });
};

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

const observer = new IntersectionObserver(trueCallback, options);

const target = document.querySelector('.header');

observer.observe(target);

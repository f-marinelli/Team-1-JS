// carosello

const images = document.querySelectorAll('.img-car');

images.forEach((img, i) => {
  img.style.order = `${i + 1}`;
});

setInterval(() => {
  images.forEach((img) => {
    img.style.transform = `translateX(-100%)`;
  });

  images.forEach((img) => {
    if (img.style.order === '0') {
      img.style.order = '6';
    }
    img.style.order = `${img.style.order - 1}`;
  });
}, 3000);

// Incrementi
const target = document.querySelector(
  'body > main > section:nth-child(4) > div:nth-child(1) > div.d-lg-flex.d-sm-flex-column.justify-content-between > div.d-sm-flex-column.d-md-flex > div:nth-child(1) > h1'
);

const target2 = document.querySelector(
  'body > main > section:nth-child(4) > div:nth-child(1) > div.d-lg-flex.d-sm-flex-column.justify-content-between > div.d-sm-flex-column.d-md-flex > div:nth-child(2) > h1'
);

let options = {
  root: null,
  rootMargin: '-100px',
  threshold: 1.0,
};

const callback = (entries) => {
  if (entries[0].isIntersecting) {
    let i = 0;
    let i2 = 0;
    const interval = setInterval(() => {
      target.firstChild.textContent = i;
      i += 1;
      if (i === 436) clearInterval(interval);
    }, 5);
    const interval2 = setInterval(() => {
      target2.firstChild.textContent = i2;
      i2 += 1;
      if (i2 === 101) clearInterval(interval2);
    }, 20);
    observer.unobserve(target);
  }
};

const observer = new IntersectionObserver(callback, options);

observer.observe(target);

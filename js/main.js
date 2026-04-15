// SCROLL ANIMATION
const faders = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

// COUNTER
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const update = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const inc = target / 200;

    if (c < target) {
      counter.innerText = Math.ceil(c + inc);
      setTimeout(update, 10);
    } else {
      counter.innerText = target;
    }
  };

  update();
});

// 3D TILT EFFECT
document.querySelectorAll('.tilt').forEach(card => {
  card.addEventListener('mousemove', e => {
    let x = e.offsetX;
    let y = e.offsetY;

    let rotateX = (y / card.offsetHeight - 0.5) * 10;
    let rotateY = (x / card.offsetWidth - 0.5) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
  });
});

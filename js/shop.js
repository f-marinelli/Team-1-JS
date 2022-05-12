const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  Array.from(card.children[1].children[1].children).forEach(
    (el) => (el.style.transition = 'transform 0.5s')
  );

  card.addEventListener('mouseover', () => {
    card.children[1].children[1].children[0].style.transform =
      'translateY(-150%)';
    card.children[1].children[1].children[1].style.transform =
      'translateY(-150%)';
  });
  card.addEventListener('mouseout', () => {
    card.children[1].children[1].children[0].style.transform = 'translateY(0)';
    card.children[1].children[1].children[1].style.transform = 'translateY(0)';
  });
});

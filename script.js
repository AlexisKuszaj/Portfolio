const skillItems = document.querySelectorAll('.skills-list li');

skillItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('highlight');
  });
});

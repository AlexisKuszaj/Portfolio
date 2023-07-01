const skillItems = document.querySelectorAll('.skills-list li');

skillItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('highlight');
  });
});

function scrollToSection(aboutId) {
  const about = document.querySelector(aboutId);
  if (about) {
    about.scrollIntoView({ behavior: 'smooth' });
  }
}
function scrollToSection(skillsId) {
  const skills = document.querySelector(skillsId);
  if (skills) {
    skills.scrollIntoView({ behavior: 'smooth' });
  }
}
function scrollToSection(projectsId) {
  const projects = document.querySelector(projectsId);
  if (projects) {
    projects.scrollIntoView({ behavior: 'smooth' });
  }
}
function scrollToSection(contactId) {
  const contact = document.querySelector(contactId);
  if (contact) {
    contact.scrollIntoView({ behavior: 'smooth' });
  }
}

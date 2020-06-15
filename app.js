// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.links');

navToggle.addEventListener('click', () => {
  // console.log(navLinks.classList);
  console.log(navLinks.classList.contains('random'));
  console.log(navLinks.classList.contains('links'));
  // if (navLinks.classList.contains('show-links')) {
  //   navLinks.classList.remove('show-links');
  // } else {
  //   navLinks.classList.add('show-links');
  // }

  navLinks.classList.toggle('show-links');
});

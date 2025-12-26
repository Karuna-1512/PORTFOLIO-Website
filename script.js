// Mobile menu toggle
function toggleMenu() {
  document.getElementById('nav-menu').classList.toggle('active');
  document.querySelector('.hamburger').classList.toggle('active');
}

// Typing effect
const typingText = document.querySelector('.typing');
const roles = ["Aspiring Full-Stack Developer", "Python & Django Enthusiast", "AI & ML Explorer", "Problem Solver"];
let roleIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < roles[roleIndex].length) {
    typingText.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, 1000);
});
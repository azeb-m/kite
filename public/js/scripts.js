// Highlight active link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });


  // Function to show the vision section after a delay
setTimeout(function() {
  const visionSection = document.getElementById('visions');
  visionSection.classList.add('visible'); // Add visible class to trigger animation
}, 100); // Delay of 3000 milliseconds (3 seconds)


});

document.addEventListener("DOMContentLoaded", () => {
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && // Element's top edge is visible
      rect.bottom > 0 // Element's bottom edge is visible
    );
  };



  const visionObserver = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
       if (entry.isIntersecting) {
           const visionSection = document.getElementById('vision');
           visionSection.classList.add('visible'); // Add visible class to trigger animation
 
           // Animate image from the top
           const image = visionSection.querySelector('.imagess');
           image.style.transform = 'translateY(0)'; // Move image to original position
 
           // Animate values list after a delay
           setTimeout(() => {
               const valuesList = document.getElementById('valuesList');
               valuesList.classList.add('visible'); // Trigger animation for values
           }, 1000); // Delay for values list animation (1 second)
 
           visionObserver.unobserve(entry.target); // Stop observing after it has appeared
       }
   });
 });
 
 // Observe the vision section
 visionObserver.observe(document.getElementById('vision'));





  const items = document.querySelectorAll('.carousel-item');
  const titles = document.querySelectorAll('.title');
  const descriptions = document.querySelectorAll('.description');
  let currentIndex = 0;

  function showNextItem() {
      items[currentIndex].classList.remove('active');
      titles[currentIndex].classList.remove('show');
      descriptions[currentIndex].classList.remove('show');

      currentIndex = (currentIndex + 1) % items.length;
      
      items[currentIndex].classList.add('active');
      
      // Delay the text animations
      setTimeout(() => {
          titles[currentIndex].classList.add('show');
      }, 100); // Title animation delay
      
      setTimeout(() => {
          descriptions[currentIndex].classList.add('show');
      }, 300); // Description animation delay
  }

  setInterval(showNextItem, 3000); // Change image every 3 seconds

  // Initial animation for the first item
  titles[currentIndex].classList.add('show');
  descriptions[currentIndex].classList.add('show');





// Observe the services section

  // Function to handle the intersection of the mission section
  const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const missionSection = entry.target;
            missionSection.style.opacity = 1; // Fade in

            const missionImage = missionSection.querySelector('.mission-image');
            missionImage.style.opacity = 1; // Fade in image
            missionImage.style.transform = 'translateX(0)'; // Slide in from the left

            const missionContent = missionSection.querySelector('.mission-content');
            missionContent.style.transform = 'translateX(0)'; // Slide in from the right

            observer1.unobserve(missionSection); // Stop observing after animation
        }
    });
});
observer1.observe(document.getElementById('missionSection'));



  const handleScroll = () => {
    portfolioItems.forEach((item) => {
      if (isInViewport(item)) {
        // Add the slide-in animation when the item enters the viewport
        item.classList.add("visible");
      } else {
        // Optionally, reset the animation when the item leaves the viewport
        item.classList.remove("visible");
      }
    });
  };

  // Attach the scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Trigger the function once on page load to check visibility
  handleScroll();
});




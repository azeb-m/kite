document.addEventListener("DOMContentLoaded", () => {
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && // Element's top edge is visible
      rect.bottom > 0 // Element's bottom edge is visible
    );
  };

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


// Scroll effect for product items
document.addEventListener("DOMContentLoaded", function () {
  const productItems = document.querySelectorAll(".card");

  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= -100 && rect.top <= window.innerHeight + 100; // Trigger when the element is within 100px above or below the viewport
  }

  // Function to handle scroll event and apply the effect every time an item enters the viewport
  function handleScroll() {
    productItems.forEach((item) => {
      if (isInViewport(item)) {
        item.classList.add("show"); // Apply the slide-in effect when the item enters the viewport
      } else {
        item.classList.remove("show"); // Remove the effect when the item leaves the viewport
      }
    });
  }

  // Initial scroll check
  handleScroll();

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  const productItems = document.querySelectorAll(".sec-header");

  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= -100 && rect.top <= window.innerHeight + 100; // Trigger when the element is within 100px above or below the viewport
  }

  // Function to handle scroll event and apply the effect every time an item enters the viewport
  function handleScroll() {
    productItems.forEach((item) => {
      if (isInViewport(item)) {
        item.classList.add("show"); // Apply the slide-in effect when the item enters the viewport
      } else {
        item.classList.remove("show"); // Remove the effect when the item leaves the viewport
      }
    });
  }

  // Initial scroll check
  handleScroll();

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);
});

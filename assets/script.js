document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".nav");
  const hero = document.querySelector(".hero");
  // Callback function for the Intersection Observer
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    });
  };

  // Create the observer with options
  const observerOptions = {
    root: null,
    threshold: 0,
  };

  // Set the observer to watch the hero section
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Start observing the hero section
  observer.observe(hero);
});

//smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Toggle navbar visibility
function toggleNav() {
  const navMenu = document.getElementById("nav-links");
  navMenu.classList.toggle("active");
}

// Close the navbar
function closeNav() {
  const navMenu = document.getElementById("nav-links");
  navMenu.classList.remove("active");
}

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Handle form submission
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting us!");
  form.reset();
});

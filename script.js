window.onload = function () {
  // Load content for each section
  loadSection("about.html", "#about");
  loadSection("services.html", "#services");
  loadSection("contact.html", "#contact");
};

function loadSection(file, sectionId) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(sectionId).innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading section:", error);
    });
}

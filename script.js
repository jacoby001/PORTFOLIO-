function showSection(id) {
  document.querySelectorAll(".content-section").forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// Navbar links
document.getElementById("nav-about").addEventListener("click", () => showSection("about"));
document.getElementById("nav-education").addEventListener("click", () => showSection("education"));
document.getElementById("nav-projects").addEventListener("click", () => showSection("projects"));
document.getElementById("nav-contact").addEventListener("click", () => showSection("contact"));
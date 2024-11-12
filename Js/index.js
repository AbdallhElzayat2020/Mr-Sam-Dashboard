function toggleSidebar() {
  let sidebar = document.getElementById("sidebar");
  let content = document.getElementById("content");

  // Toggle class to handle sidebar collapse
  sidebar.classList.toggle("collapsed");
  content.classList.toggle("sidebar-close");
}

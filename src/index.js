// Common Styles
import "./styles/style.scss";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Pages
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import MenuPage from "./pages/Menu";


// Default Page
const defaultPage = HomePage;
// Create default page
function createPage(page) {
  // get root elem
  const root = document.getElementById("content");

  // Show header
  root.innerHTML += Header();
  // Show default page
  root.innerHTML += `<div id="page"></div>`;
  document.getElementById("page").innerHTML += page();
  // Show footer
  root.innerHTML += Footer();
}
createPage(defaultPage);

// Add click listener to nav links
window.addEventListener('load', function() {
  document.querySelectorAll(".nav-item").forEach(link => {
    // Run changePage function when user click at link
    link.addEventListener("click", event => changePage(event))
  })
});

function changePage(event) {
  const clickedLink = event.target.innerText;

  // Change default page content
  switch(clickedLink) {
    case "Home":
      document.getElementById("page").innerHTML = HomePage();
      break;
    case "Menu":
      document.getElementById("page").innerHTML = MenuPage();
      break;
    case "Contact":
      document.getElementById("page").innerHTML = ContactPage();
      break;
    default:
      document.getElementById("page").innerHTML += HomePage();
  }
}
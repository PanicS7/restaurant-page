// Styles
import "./styles/style.scss";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Pages
import HomePage from "./pages/Home";


// Default Page
const defaultPage = HomePage;

function showPage(page) {
  // get root elem
  const root = document.getElementById("content");
  // Show header
  root.innerHTML += Header();
  // Show default page
  root.innerHTML += page();
  // Show footer
  root.innerHTML += Footer();
}

showPage(defaultPage);
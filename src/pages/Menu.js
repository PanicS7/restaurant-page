// Page Styles
import "../styles/home.scss";
import "../styles/menu.scss";
// Components
import MenuItem from "../components/MenuItem";
// Menu Images
import CevapciciImage from "../images/menu/cevapcici.jpg";
import FrenchFriesImage from "../images/menu/french-fries.jpg";
import FriedRiceImage from "../images/menu/fried-rice.jpg";
import GrilImage from "../images/menu/gril.jpg";
import SarmaImage from "../images/menu/sarma.jpg";
import SpaghettiImage from"../images/menu/spaghetti.jpg";

// Bundle menu images
const menuImages = [
  {
    name: "Cevapcici",
    url: CevapciciImage
  },
  {
    name: "French Fries",
    url: FrenchFriesImage
  },
  {
    name: "Fried Rice",
    url: FriedRiceImage
  },
  {
    name: "Gril",
    url: GrilImage
  },
  {
    name: "Sarma",
    url: SarmaImage
  },
  {
    name: "Spaghetti",
    url: SpaghettiImage
  }
]

function MenuPage() {
  const menuContainer = `
    <div id="menu">
      <div id="menu-container">
        ${menuImages.map(image => {
          return MenuItem(image.name, image.url)
          // .join("") will remove extra "," what is visible at screen
        }).join("")}
      </div>
    </div>
  `;

  return menuContainer;
}

export default MenuPage;
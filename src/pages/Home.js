// Page Styles
import "../styles/home.scss";
// Image
import MealImage from '../images/meal.jpg';

function HomePage() {
  const homeContainer = `
    <div id="home">
      <div id="home-wrapper">
        <div id="summary" class="home-section">
          <h2 class="title">Traditional Serbian Restaurant "Serbian House"</h2>
          <p class="indented">"Serbian House" has best Serbian traditional dishes</p>
          <p class="indented">We are located at center of capital city</p>
          <p class="indented">In our restaurant you can enjoy not just in food but also Serbian culture</p>
        </div>
        <div id="hours" class="home-section">
          <h2 class="title">Hours</h2>
          <ul class="indented">
            <li>Monday: 7am - 11pm</li>
            <li>Tuesday: 7am - 11pm</li>
            <li>Wednesday: 7am - 11pm</li>
            <li>Thursday: 7am - 11pm</li>
            <li>Friday: 7am - 11pm</li>
            <li>Saturday: 7am - 11pm</li>
            <li>Sunday: 7am - 11pm</li>
          </ul>
        </div>
        <div id="location" class="home-section">
          <h2 class="title">Location</h2>
          <p class="indented">Takovska bb, Belgrade, Serbia</p>
        </div>
      </div>

      <div id="side-image-container">
        <img id="mealImage" src=${MealImage} alt="meal image" />
      </div>
    </div>
  `;


  return homeContainer;
}

export default HomePage;
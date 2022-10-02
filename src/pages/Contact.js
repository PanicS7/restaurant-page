// Page Styles
import "../styles/home.scss";
import "../styles/contact.scss";

function ContactPage() {
  const contactContainer = `
    <div id="contact">
      <div id="contact-container">
        <div id="contact-icons">
          <p> 
            <i class="fa-solid fa-phone"></i>
            +123456789
          </p>
          <p> 
            <i class="fa-solid fa-map-location"></i> 
            Belgrade, Serbia
          </p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181139.35491099412!2d20.282511064845345!3d44.815403290218235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2z0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1664745594982!5m2!1ssr!2srs" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  `;


  return contactContainer;
}

export default ContactPage;
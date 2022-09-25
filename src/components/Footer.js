import LogoFooter from "../assets/img/logoFooter.png";
import Instagram from "../assets/img/Instagram.png";
import Telegram from "../assets/img/Telegram.png";
import Google from "../assets/img/Google.png";
import Twitter from "../assets/img/Twitter.png";
import Facebook from "../assets/img/Facebook.png";
import Phonefooter from "../assets/img/phonefooter.png";
import "../style/FooterStyle.css";
function Footer() {
  return (
    <footer>
      <div className="footer-box">
        <div>
          <div className="footer-content-wrapper">
            <div className="logo-footer-content">
              <img src={LogoFooter} alt="logoFooter" />
              <p>Биз ижтимоий тармоқларда</p>
              <div className="footer-social-box">
                <a href="#">
                  <img src={Facebook} alt="facebook-icon" />
                </a>
                <a href="#">
                  <img src={Instagram} alt="instagram-icon" />
                </a>
                <a href="#">
                  <img src={Twitter} alt="twitter-icon" />
                </a>
                <a href="#">
                  <img src={Telegram} alt="telegram-icon" />
                </a>
                <a href="#">
                  <img src={Google} alt="google-icon" />
                </a>
              </div>
              <p>
                © Copyright 2022. Все права защищены Узархив агентлиги томонидан
                ишлаб чиқилган
              </p>
            </div>
            <div className="second-footer-section">
              <a className="underline" href="#">
                Рўйхатлар реестри
              </a>
              <a className="underline" href="#">
                Кўрсатгичлар
              </a>
              <a className="underline" href="#">
                Йўлкўрсатгич
              </a>
            </div>
            <div className="third-footer-section">
              <a className="underline" href="#">
                Мавзули қидириш
              </a>
              <a className="underline" href="#">
                Қидириш
              </a>
              <a className="underline" href="#">
                Алоқа
              </a>
            </div>
            <div className="last-footer-section">
              <p>Ишонч телефони</p>
              <div className="phone-footer-box">
                <img src={Phonefooter} alt="phone-icon" />
                <a href="tel:+998555030150">+998 55 503 01 50</a>
              </div>
              <p>С 9.00 до 18.00 (Тушлик 13.00-14.00) Душанба-жума</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

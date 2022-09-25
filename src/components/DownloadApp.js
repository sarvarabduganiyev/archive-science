import "../style/DownloadApp.css";
import phone from "../assets/img/phone.png";
import appstore from "../assets/img/appstore.png";
import googleplay from "../assets/img/googleplay.png";
function DownloadApp() {
  return (
    <section>
      <div className="mobile-section">
        <div className="mobile-flex">
          <div className="mobile-img-first">
            <img src={phone} alt="phone-img" />
          </div>
          <div>
            <div>
              <div className="mobile-app-title-box">
                <h1>
                  Ўзбекистон Миллий архиви фондларининг онлайн йўл кўрсаткичи
                </h1>
                <div className="redline"></div>
                <p>
                  Смартфонингиз учун махсус ва замонавий дастур. Мобил
                  қурилмалардан юклаб олинг ва тўланг.
                </p>
                <p>
                  Иловамизнинг энг сўнгги функцияларидан баҳраманд бўлиш учун
                  иловани тез-тез янгилаб туришни унутманг!
                </p>
              </div>
              <div className="market-lins-wrapper">
                <p>Ҳозироқ юклаб олинг!</p>
                <div className="store-box">
                  <button>
                    <img src={appstore} alt="appstore" />
                  </button>
                  <button>
                    <img className="google-play-logo" src={googleplay} alt="googleplay" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;

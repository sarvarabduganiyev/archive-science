import { Swiper, SwiperSlide } from "swiper/react";
import "../style/SwiperComponent.css";
import "swiper/css";
import "swiper/css/pagination";
import "../style/SwiperComponent.css";
import { Pagination, Autoplay } from "swiper";
import archiveBg from "../assets/img/archiveBg.jpg";
function SwiperComponent() {
  return (
    <section className="slider-section">
      <div className="slider-size-components">
        <div className="grid-size">
          <div className="first-grid">
            <div className="title-wrapper">
              <h1>
                Ўзбекистон Миллий архиви фондларининг онлайн йўл кўрсатгичи
              </h1>
              <h1>Тадқиқотчилар учун таклиф</h1>
            </div>
            <p>
              Ўзбекистон архивлари илмий-тадқиқот ишларида муҳим аҳамиятга эга.
              Турли лойиҳалар орқали биз коллекциямизнинг илмий тадқиқотлар учун
              имкониятларини таъкидлашни мақсад қилганмиз. Бу рақамли гуманитар
              тадқиқотлар соҳаларида ҳам муҳим аҳамиятга эга - маълумотлар ва
              метамаълумотларни тақдим этиш орқали.
            </p>
          </div>
          <div className="swiper-wrapper-box">
            <Swiper
              pagination={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={archiveBg} alt="archiveBg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={archiveBg} alt="archiveBg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={archiveBg} alt="archiveBg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={archiveBg} alt="archiveBg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={archiveBg} alt="archiveBg" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SwiperComponent;

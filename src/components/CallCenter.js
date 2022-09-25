import Input from "react-phone-number-input/input";
import "../style/CallCenter.css";
import Operator from "../assets/img/opertorCall.png";
import { useState } from "react";
function CallCenter() {
  const [value, setValue] = useState();
  return (
    <section className="call-section-name">
      <div className="call-center-wrapper">
        <div className="call-center-register">
          <div className="first-call-line">
            <div className="notification-box">
              <h3>Маълумот тополмадингизми?</h3>
              <p>
                Қайта алоқа учун ўз маълумотларингизни қолдиринг ва
                мутахассисларимиз албатта Сиз билан боғланишади.
              </p>
            </div>
            <div className="call-number-wrapper">
              <p>Ягона call-марказ рақами</p>
              <h1>55 503 01 50</h1>
            </div>
          </div>
          <div className="last-call-line">
            <div className="person-data">
              <div className="person-name-box">
                <p>Ф.И.Ш.</p>
                <input className="person-name-input" type="text" />
              </div>
              <div className="phone-wrapper">
                <p>Телефон</p>
                <Input
                  className="person-phone-input"
                  country="UZ"
                  international
                  withCountryCallingCode
                  value={value}
                  onChange={setValue}
                />
              </div>
              <div className="select-location-wrapper">
                <p>Ҳудуд</p>
                <select>
                  <option value="Sirdaryo">Sirdaryo</option>
                  <option value="Guliston">Guliston</option>
                  <option value="Sohilobod">Sohilobod</option>
                </select>
              </div>
              <div className="data-search-wrapper">
                <button>Маълумот қолдириш</button>
              </div>
            </div>
          </div>
        </div>
        <div className="operator-girl">
          <img src={Operator} alt="operatorGirl" />
        </div>
      </div>
    </section>
  );
}

export default CallCenter;

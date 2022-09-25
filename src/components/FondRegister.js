import { useState } from "react";
import "../style/FondRegister.css";

function FondRegister() {
  const [fondTab, setFondTab] = useState(true);
  const [onlyNumber, setOnlyNumber] = useState(null);
  const fondNumber = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setOnlyNumber(value);
  };
  return (
    <section>
      <div className="fond-register">
        <div className="fond-register-inner">
          <div className="fond-tab">
            <button
              className={fondTab ? "border-bottom-style" : null}
              onClick={() => setFondTab(true)}
            >
              Йўлкўрсатгич
            </button>
            <button
              className={!fondTab ? "border-bottom-style" : null}
              onClick={() => setFondTab(false)}
            >
              Мавзули қидириш
            </button>
          </div>
          <form className="searchFond">
            <input type="text" placeholder="Қидирш учун маълумот киритинг" />
            <button type="submit">Қидириш</button>
          </form>
          <div>
            <div className="grid-input">
              <div>
                <h6>Фонд рақами</h6>
                <input onChange={fondNumber} type="text" value={onlyNumber} />
              </div>
              <div>
                <h6>Бошланиш санаси</h6>
                <input onChange={fondNumber} type="text" value={onlyNumber} />
              </div>
              <div>
                <h6> Тугаш санаси</h6>
                <input onChange={fondNumber} type="text" value={onlyNumber} />
              </div>
              <div>
                <h6>Йўлкўрсатгични танланг</h6>
                <input className="type-date-input" type="date" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FondRegister;

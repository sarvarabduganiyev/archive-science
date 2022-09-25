import { useState } from "react";
import logo from "../assets/img/logo.png";
import {
  BurgerIcon,
  CloseIcon,
  DropIcon,
  GlassesIcon,
  GlobalNavIcon,
  LocationIcon,
  LogOut,
  MessageNavIcon,
  TelegramNavIcon,
} from "../assets/svg";
import "react-accessible-accordion/dist/fancy-example.css";
import "../style/Navbar.css";
import BurgerContent from "./BurgerContent";
import LogInBtn from "./LogInBtn";
function Navbar() {
  const [tab, setTab] = useState("first");
  const [toggle, setToggle] = useState(true);
  const BurgerChange = () => {
    setToggle(!toggle);
  };
  return (
    <header>
      <nav>
        <div className="archive-nav-wrapper">
          <div className="archive-logo-wrapper">
            <img src={logo} alt="archive-logo" />
          </div>
          <div className="archive-links-wrapper">
            <div className="navbar-first-line-box">
              <div className="navbar-first-line">
                <div className="navbar-tab-wrapper">
                  <button
                    onClick={() => setTab("first")}
                    className={tab === "first" ? "border-bottom-color" : null}
                  >
                    Совет даври архив фондлари бўйича электрон йўлкўрсатги
                  </button>
                  <button
                    onClick={() => setTab("last")}
                    className={tab === "last" ? "border-bottom-color" : null}
                  >
                    Мавзули қидириш
                  </button>
                </div>
                <div className="top-logIn-btn">
                  <LogInBtn />
                </div>
                <div className="navbar-links">
                  <div className="nav-links-wrapper">
                    <LocationIcon />
                    <button className="underline">Архивлар</button>
                  </div>
                  <div className="nav-links-wrapper">
                    <GlassesIcon />
                    <button className="underline">Махсус имкониятлар</button>
                  </div>
                  <div className="nav-links-wrapper">
                    <GlobalNavIcon />
                    <button className="underline">Ru</button>
                  </div>
                </div>
              </div>
              {/* second menu */}
              <div className="burger-icons-wrapper">
                {toggle ? (
                  <BurgerIcon BurgerChange={BurgerChange} />
                ) : (
                  <CloseIcon BurgerChange={BurgerChange} />
                )}
              </div>
              <div className="second-menu-wrapper">
                <div className="second-menu-box">
                  <button className="underline">Рўйхатлар реестри</button>
                  <div className="second-menu-box-item">
                    <button className="underline">Кўрсатгичлар</button>
                    <DropIcon />
                  </div>
                  <div className="second-menu-box-item indicator-drop">
                    <button className="underline">Кўрсатгичлар</button>
                    <DropIcon />
                  </div>
                  <div className="second-menu-box-item alphabet-wrapper">
                    <button className="underline">А - Я</button>
                  </div>
                </div>
                <div className="second-last-wrapper">
                  <div className="second-menu-box-item nav-telegram-link">
                    <TelegramNavIcon />
                    <button className="underline">
                      <a href="https://t.me/uzarxivs">@uzarxivs</a>
                    </button>
                  </div>
                  <div className="second-menu-box-item nav-email-link">
                    <MessageNavIcon />
                    <button className="underline">
                      <a href="email:uzarchive@archive.uz">
                        uzarchive@archive.uz
                      </a>
                    </button>
                  </div>
                  <div className="second-menu-box-item">
                    <LogInBtn />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={toggle ? "burger-wrapper" : "burger-wrapper burger-active"}
      >
        <BurgerContent />
      </div>
    </header>
  );
}

export default Navbar;

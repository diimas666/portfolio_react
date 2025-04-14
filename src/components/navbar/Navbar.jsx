import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BtnDarMode } from "../btnDarkMode/BtnDarkMode";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import "./style.css";

function Navbar() {
  const { t } = useTranslation();
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolling ? "nav-fixed" : ""}`}>
      <div className="container">
        <div className="nav-row">
          <NavLink to="/home" className="logo">
            <strong>Freelancer</strong> portfolio
          </NavLink>

          <BtnDarMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/home" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                {t("home")}
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/projects" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                {t("projects")}
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/contacts" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                {t("contacts")}
              </NavLink>
            </li>
          </ul>

          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}

export { Navbar };

import { useTranslation } from "react-i18next";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const css = classNames.bind(styles);
function Header() {
  const { t, i18n } = useTranslation();
  function clickLanguage(language: string) {
    i18n.changeLanguage(language);
  }
  const onChangeLanguage = (language: string) => {
    clickLanguage(language);
  };
  return (
    <div className={css("wrapper")}>
      {" "}
      <div className={css("container-btn")}>
        <button
          style={i18n.language === "en" ? { background: "orange" } : undefined}
          onClick={() => onChangeLanguage("en")}>
          English
        </button>
        <button
          style={i18n.language === "vi" ? { background: "orange" } : undefined}
          onClick={() => onChangeLanguage("vi")}>
          Tiếng Việt
        </button>
      </div>
    </div>
  );
}

export default Header;

import { useTranslation } from "react-i18next";
import "./Header.scss";
function Header() {
  const { t, i18n } = useTranslation();
  function clickLanguage(language: string) {
    i18n.changeLanguage(language);
  }
  const onChangeLanguage = (language: string) => {
    clickLanguage(language);
  };
  console.log("check i18n --->", i18n.language);

  return (
    <div className="wrapper-header">
      <div className="wrapper-component">component header {t("language")}</div>
      <div className="container-btn">
        <button
          className={i18n.language === "en" ? "btn" : undefined}
          onClick={() => onChangeLanguage("en")}>
          English
        </button>
        <button
          className={i18n.language === "vi" ? "btn" : undefined}
          onClick={() => onChangeLanguage("vi")}>
          Tiếng Việt
        </button>
      </div>
    </div>
  );
}

export default Header;

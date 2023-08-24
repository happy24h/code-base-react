import { useTranslation } from "react-i18next";

function Translate(lang: any): void {
  const { t, i18n } = useTranslation();
  i18n.changeLanguage(lang);
}

export default Translate;

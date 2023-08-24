import { useTranslation } from "react-i18next";
function DetailHome() {
  const { t } = useTranslation();
  return <div style={{ textAlign: "center" }}>{t("home.detail")}</div>;
}

export default DetailHome;

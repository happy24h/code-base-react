import "./Home.scss";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t, i18n } = useTranslation();
  return <div className="wrapper-home">{t("home.helloWorld")}</div>;  
};

export default Home;

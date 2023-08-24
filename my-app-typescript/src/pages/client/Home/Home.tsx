import "./Home.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate("/detail-home/5");
  };

  return (
    <div className="wrapper-home">
      <h3>{t("home.helloWorld")} </h3>
      <button style={{ marginTop: 10 }} onClick={() => handleDetail()}>
        {t("home.seeDetails")}
      </button>
    </div>
  );
};

export default Home;

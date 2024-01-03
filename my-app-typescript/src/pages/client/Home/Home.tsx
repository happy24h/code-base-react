import "./Home.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "antd";

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

      <br />
      <br />
      <br />
      <div>
        <Row>
          <Col xxl={4} xl={6} lg={8} md={12} sm={24}>
            {/* Nội dung cho màn hình xxl, xl, lg, md, và sm */}
            <div className="box">Content</div>
          </Col>
          <Col xxl={4} xl={6} lg={8} md={12} sm={24}>
            <div className="box">Content</div>
          </Col>
          <Col xxl={4} xl={6} lg={8} md={12} sm={24}>
            <div className="box">Content</div>
          </Col>
          <Col xxl={4} xl={6} lg={8} md={12} sm={24}>
            <div className="box">Content</div>
          </Col>
          <Col xxl={4} xl={6} lg={8} md={12} sm={24}>
            <div className="box">Content</div>
          </Col>
          <Col xxl={4} xl={6} lg={8} md={12} sm={24}>
            <div className="box">Content</div>
          </Col>
          <Col xxl={4} xl={6} lg={8} md={12} sm={24}>
            <div className="box">Content</div>
          </Col>
          <Col xxl={4} xl={6} lg={8} md={12} sm={24}>
            <div className="box">Content</div>
          </Col>
        </Row>

        <br />
        <br />
        <br />

        <Row>
          <Col span={6}>
            <div className="box">Content 6</div>
          </Col>
          <Col span={12}>
            <div className="box">Content 12</div>
          </Col>
          <Col span={6}>
            <div className="box">Content 6</div>
          </Col>
          <Col span={6}>
            <div className="box">Content 6</div>
          </Col>
          <Col span={12}>
            <div className="box">Content 12</div>
          </Col>
          <Col span={6}>
            <div className="box">Content 6</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;

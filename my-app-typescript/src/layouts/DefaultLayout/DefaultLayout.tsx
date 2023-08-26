import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function DefaultLayout({ children }: any) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;

import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import classNames from "classnames/bind";
import styles from "./SidebarLayout.module.scss";
const css = classNames.bind(styles);

function SidebarLayout({ children }: { children: any }): JSX.Element {
  return (
    <div className={css("wrapper")}>
      <Sidebar />
      <div className={css("container")}>
        <Header />
        {children}
      </div>
    </div>
  );
}

export default SidebarLayout;

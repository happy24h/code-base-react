import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const css = classNames.bind(styles);
function Header() {
  return <div className={css("wrapper")}>component header</div>;
}

export default Header;

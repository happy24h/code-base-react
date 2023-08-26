import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import MenuItem from "./Menu/MenuItem";
import { HomeOutlined } from "@ant-design/icons";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <div className={cx("wrapper")}>
      <nav className={cx("navWrapper")}>
        <MenuItem title="Home" to={"/"} icon={<HomeOutlined />} />
        <MenuItem title="Content" to={"/content"} icon={<HomeOutlined />} />
        <MenuItem title="Login" to={"/login"} icon={<HomeOutlined />} />
        <MenuItem
          title="Manage user"
          to={"/system-manage-user"}
          icon={<HomeOutlined />}
        />
      </nav>
    </div>
  );
}

export default Sidebar;

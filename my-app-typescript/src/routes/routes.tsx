import Home from "../pages/client/Home";
import Content from "../pages/client/Content";
// import HeaderOnly from "../layouts/HeaderOnly/HeaderOnly";
import DetailHome from "../pages/client/Home/id/DetailHome";
import Login from "../pages/client/Login/Login";
// import Home from "../pages/client/Home/Home";
import ManageUser from "../pages/admin/ManageUser/ManageUser";
import ManageEmployee from "../pages/admin/ManageEmployee/ManageEmployee";

const publicRouters: any[] = [
  { path: "/", component: Home, changeLayout: "headerOnly" },
  {
    path: "/detail-home/:id",
    component: DetailHome,
    changeLayout: "headerOnly",
  },
  // sidebar layout
  { path: "/login", component: Login, changeLayout: "sidebarLayout" },
  { path: "/content", component: Content, changeLayout: "sidebarLayout" },
  { path: "/system", component: ManageUser, changeLayout: "sidebarLayout" },
  {
    path: "/system-manage-user",
    component: ManageEmployee,
    changeLayout: "sidebarLayout",
  },
];
const privateRoutes: any[] = [];

export { publicRouters, privateRoutes };

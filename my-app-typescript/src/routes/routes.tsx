import Home from "../pages/Home";
import Content from "../pages/Content";
// import HeaderOnly from "../layouts/HeaderOnly/HeaderOnly";
import DetailHome from "../pages/Home/id/DetailHome";
import Login from "../pages/Login/Login";

const publicRouters: any[] = [
  { path: "/", component: Home },
  // { path: "/content", component: Content },
  {
    path: "/detail-home/:id",
    component: DetailHome,
    changeLayout: "headerOnly",
  },
  // sidebar layout
  { path: "/login", component: Login, changeLayout: "sidebarLayout" },
  { path: "/content", component: Content, changeLayout: "sidebarLayout" },
  { path: "/login", component: Login, changeLayout: "sidebarLayout" },
];
const privateRoutes: any[] = [];

export { publicRouters, privateRoutes };

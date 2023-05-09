import Home from "../pages/Home";
import Content from "../pages/Content";
const publicRouters: any[] = [
  { path: "/", component: Home },
  { path: "/content", component: Content },
];
const privateRoutes: any[] = [];

export { publicRouters, privateRoutes };

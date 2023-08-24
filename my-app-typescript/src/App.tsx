import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import SidebarLayout from "./layouts/SidebarLayout/SidebarLayout";
import HeaderOnly from "./layouts/HeaderOnly/HeaderOnly";
import { publicRouters } from "./routes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {publicRouters.map((route, index) => {
            const Page = route.component;
            let Layout: ({ children }: any) => JSX.Element = DefaultLayout;
            if (route.changeLayout === "headerOnly") {
              Layout = HeaderOnly;
            } else if (route.changeLayout === "sidebarLayout") {
              Layout = SidebarLayout;
            }
            return (
              <Route
                path={route.path}
                key={index}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;

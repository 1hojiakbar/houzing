import { BrowserRouter, Route, Routes } from "react-router-dom";
import navbar from "../utils/navbar";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map(({ id, element: Element, path }) => {
            return (
              <Route
                key={id}
                path={path}
                element={typeof Element === "string" ? Element : <Element />}
              />
            );
          })}
        </Route>
        {/* <Route path="/" element={<h1>Home</h1>} /> */}
        {/* <Route path="properties" element={<h1>Properties</h1>} /> */}

        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;

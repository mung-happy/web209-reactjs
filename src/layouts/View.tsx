import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

import Spinner from "../components/Spinner";

const View = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default View;

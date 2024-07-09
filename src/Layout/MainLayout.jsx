import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;

import { Outlet } from "react-router-dom";
import Footer from "../global/Footer";
import Header from "../global/Header";

const Main = () => {
  return (
    <div>
      <Header />
         <Outlet />
      <Footer/>
    </div>
  );
};

export default Main;
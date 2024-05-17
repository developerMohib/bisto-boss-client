import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar> </Navbar>
      <div className="max-w-screen-xl mx-auto" >
        <Outlet> </Outlet>
      </div>
      <Footer> </Footer>
    </div>
  );
};

export default Root;

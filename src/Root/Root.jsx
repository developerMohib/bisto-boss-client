import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const Root = () => {
  const location = useLocation() ;
  const noHeaderFooter = location.pathname.includes('login') ;

  return (
    <div>
      { noHeaderFooter || <Navbar> </Navbar> }
      <div className="max-w-screen-xl mx-auto" >
        <Outlet> </Outlet>
      </div>
      { noHeaderFooter || <Footer> </Footer> }
    </div>
  );
};

export default Root;

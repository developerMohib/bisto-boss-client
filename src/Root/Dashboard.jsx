import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
      <div  className="flex">
      <div className="w-1/4 bg-slate-400">
        <ul className="menu">
          <li className="p-2 my-1" > <NavLink to="/dashboard/userHome"> <FaHome> </FaHome> User Home </NavLink>{" "} </li>
          <li className="p-2 my-1" > <NavLink to="/dashboard/reservation"> <FaCalendar></FaCalendar> Reservation </NavLink>{" "} </li>
          <li className="p-2 my-1" > <NavLink to="/dashboard/payment"> <FaMoneyBillTransfer></FaMoneyBillTransfer> Payment History </NavLink>{" "} </li>
          <li className="p-2 my-1" > <NavLink to="/dashboard/cart"> <FaShoppingCart> </FaShoppingCart> My Cart </NavLink>{" "} </li>
          <li className="p-2 my-1" > <NavLink to="/dashboard/review"> <FaHome></FaHome> Add Review </NavLink>{" "} </li>
          <li className="p-2 my-1" > <NavLink to="/dashboard/booking"> <FaShoppingCart> </FaShoppingCart> My Booking </NavLink>{" "} </li>
        </ul>
      </div>

      <div className="flex-1">
        <Outlet> </Outlet>
      </div>
      </div>
  );
};

export default Dashboard;

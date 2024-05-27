import {
  FaBars,
  FaCalendar,
  FaHome,
  FaShoppingCart,
  FaEnvelope,
  FaShoppingBag,
  FaUsers,
  FaUtensils,
  FaList,
} from "react-icons/fa";
import { FaMoneyBillTransfer} from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { Tooltip } from "react-tooltip";

const Dashboard = () => {
  const { user, logOut } = useAuth();
  const isAdmin = true;

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("log out successfully");
    });
  };
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-xl font-semibold mx-2 border-b border-slate-600"
            : "text-xl font-semibold mx-2"
        }
      >
        {" "}
        Home{" "}
      </NavLink>
      <NavLink
        to="/menu"
        className={({ isActive }) =>
          isActive
            ? "text-xl font-semibold mx-2 border-b border-slate-600"
            : "text-xl font-semibold mx-2"
        }
      >
        {" "}
        Our Menu{" "}
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-xl font-semibold mx-2 border-b border-slate-600"
            : "text-xl font-semibold mx-2"
        }
      >
        Contact
      </NavLink>
    </>
  );
  return (
    <div className="flex">
      <div className="w-1/4 bg-slate-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li className="py-1">
                {" "}
                <NavLink to="/dashboard/adminHome">
                  {" "}
                  <FaHome> </FaHome> Admin Home{" "}
                </NavLink>{" "}
              </li>
              <li className="py-1">
                {" "}
                <NavLink to="/dashboard/addItem">
                  {" "}
                  <FaUtensils></FaUtensils> Add Item{" "}
                </NavLink>{" "}
              </li>
              <li className="py-1">
                {" "}
                <NavLink to="/dashboard/manageItem">
                  {" "}
                  <FaList></FaList> Manage item{" "}
                </NavLink>{" "}
              </li>
              <li className="py-1">
                {" "}
                <NavLink to="/dashboard/manageBooking">
                  {" "}
                  <FaBars> </FaBars> Manage Booking{" "}
                </NavLink>{" "}
              </li>
              <li className="py-1">
                {" "}
                <NavLink to="/dashboard/allUsers">
                  {" "}
                  <FaUsers></FaUsers> All Users{" "}
                </NavLink>{" "}
              </li>
              <li className="py-1">
                {" "}
                <NavLink to="/dashboard/myBooking">
                  {" "}
                  <FaShoppingCart> </FaShoppingCart> My Booking {" "}
                </NavLink>{" "}
              </li>
            </>
          ) : (
            <>
              <li className="py-1">
                {" "}
                <NavLink to="/dashboard/userHome">
                  {" "}
                  <FaHome> </FaHome> User Home{" "}
                </NavLink>{" "}
              </li>
              <li className="py-1">
                {" "}
                <NavLink to="/dashboard/reservation">
                  {" "}
                  <FaCalendar></FaCalendar> Reservation{" "}
                </NavLink>{" "}
              </li>
              <li className="py-1">
                {" "}
                <NavLink to="/dashboard/payment">
                  {" "}
                  <FaMoneyBillTransfer></FaMoneyBillTransfer> Payment History{" "}
                </NavLink>{" "}
              </li>
              <li className="py-1">
                {" "}
                <NavLink to="/dashboard/cart">
                  {" "}
                  <FaShoppingCart> </FaShoppingCart> My Cart{" "}
                </NavLink>{" "}
              </li>
              <li className="py-1">
                {" "}
                <NavLink to="/dashboard/review">
                  {" "}
                  <FaHome></FaHome> Add Review{" "}
                </NavLink>{" "}
              </li>
              <li className="py-1">
                {" "}
                <NavLink to="/dashboard/booking">
                  {" "}
                  <FaShoppingCart> </FaShoppingCart> My Booking{" "}
                </NavLink>{" "}
              </li>
            </>
          )}
        </ul>
        <ul className="menu border-t">
          <li className="py-1">
            {" "}
            <NavLink to="/">
              {" "}
              <FaHome> </FaHome> Home{" "}
            </NavLink>{" "}
          </li>
          <li className="py-1">
            {" "}
            <NavLink to="/menu">
              {" "}
              <FaBars> </FaBars> Menu{" "}
            </NavLink>{" "}
          </li>
          <li className="py-1">
            {" "}
            <NavLink to="/">
              {" "}
              <FaShoppingBag></FaShoppingBag> Shop 
            </NavLink>{" "}
          </li>
          <li className="py-1">
            {" "}
            <NavLink to="/contact">
              {" "}
              <FaEnvelope></FaEnvelope> Conatct{" "}
            </NavLink>{" "}
          </li>
        </ul>
      </div>

      <div className="flex-1">
        <div className="flex bg-slate-300 justify-between py-2 px-4 items-center ">
          <div>{navLinks}</div>
          <div>
            {user ? (
              <>
                <div className="flex">
                  {user?.photoURL ? (
                    <img
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={user?.displayName}
                      data-tooltip-place="left"
                      className="w-10 mx-4 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                  ) : (
                    <img
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={user?.displayName}
                      data-tooltip-place="left"
                      className="w-10 mx-4 rounded-full"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  )}
                  <button
                    onClick={handleLogOut}
                    className="text-xl font-semibold"
                  >
                    {" "}
                    Log Out{" "}
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link className="text-xl font-semibold" to="/login">
                  {" "}
                  Log In{" "}
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="p-4">
          <Outlet> </Outlet>
        </div>
      </div>

      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Dashboard;

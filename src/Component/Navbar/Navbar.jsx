import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthCustomContext } from "../../AuthProvider/AuthProvider";
import { Tooltip } from "react-tooltip";
import toast from "react-hot-toast";
import { IoCart } from "react-icons/io5";
import useCartData from "../../Hooks/useCartData";

const Navbar = () => {
  const { user, logOut } = useContext(AuthCustomContext);
  const [cart] = useCartData() ;
  console.log(cart)

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
      {user && (
        <>
          <NavLink
            to="/dashboard/userHome"
            className={({ isActive }) =>
              isActive
                ? "text-xl font-semibold mx-2 border-b border-slate-600"
                : "text-xl font-semibold mx-2"
            }
          >
            {" "}
            Dashbord{" "}
          </NavLink>
          <NavLink
            to="/order/salad"
            className={({ isActive }) =>
              isActive
                ? "text-xl font-semibold mx-2 border-b border-slate-600"
                : "text-xl font-semibold mx-2"
            }
          >
            {" "}
            Order Food{" "}
          </NavLink>
          <Link to='/dashboard/cart' >
          <span className="flex ">
            <IoCart className="text-2xl"> </IoCart>
            <div className="badge bg-white ml-2 "> {cart.length} </div>
          </span>
          </Link>
        </>
      )}
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
    <div className="navbar fixed z-10 bg-opacity-60 bg-slate-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-semibold">
          {" "}
          Bisto Boss{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
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
              <button onClick={handleLogOut} className="text-xl font-semibold">
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
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Navbar;

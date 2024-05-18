import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = <>
  <NavLink to='/' className={({ isActive }) => 
    isActive 
      ? 'text-xl font-semibold mx-2 border-b border-slate-600' 
      : 'text-xl font-semibold mx-2'
  } > Home </NavLink>

  <NavLink to='/contact' className={({ isActive }) => 
    isActive 
      ? 'text-xl font-semibold mx-2 border-b border-slate-600' 
      : 'text-xl font-semibold mx-2'
  } > Contact us </NavLink>

  <NavLink to='/dashbord' className={({ isActive }) => 
    isActive 
      ? 'text-xl font-semibold mx-2 border-b border-slate-600' 
      : 'text-xl font-semibold mx-2'
  } > Dashbord </NavLink>
  <NavLink to='/shop' className={({ isActive }) => 
    isActive 
      ? 'text-xl font-semibold mx-2 border-b border-slate-600' 
      : 'text-xl font-semibold mx-2'
  } > Our Shop </NavLink>

  <NavLink to='/menu' className={({ isActive }) => 
    isActive 
      ? 'text-xl font-semibold mx-2 border-b border-slate-600' 
      : 'text-xl font-semibold mx-2'
  } > Our Menu </NavLink>
  <NavLink to='/login' className={({ isActive }) => 
    isActive 
      ? 'text-xl font-semibold mx-2 border-b border-slate-600' 
      : 'text-xl font-semibold mx-2'
  } > Log in </NavLink>
  </>
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
        <Link to='/' className="text-2xl font-semibold" > Bisto Boss </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;

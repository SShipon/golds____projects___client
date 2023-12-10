import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { AuthContext } from '../../../Hooks/AuthProvider';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate('/login');
  };
  const navItem = (
    <>
      <li>
        <Link to="/">Jewellary</Link>
      </li>
      <li>
        <Link to="/pearl">Pearl</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      {user ? (
        <button onClick={logout} className=" btn btn-success font-bold ">
          SignOut
        </button>
      ) : (
        <Link to="/login" className="flex justify-center align-items-center">
          <button className="btn-info pl-[10px] pr-[10px] rounded ">Login</button>
        </Link>
      )}
    </>
  );
  return (
    <div className="bg-base-100">
      <div className="navbar bg-black text-white font-bold ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <a className="normal-case text-xl">Jewellary Town</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>

        <div className="navbar-end mx-auto ">
          {/* <p>{user?.displayName}</p> */}
          <div className="dropdown dropdown-end flex justify-center align-items-center">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full mt-2">
                <Link to="/cart">
                  <i className="fa-solid fa-cart-shopping text-2xl"></i>
                </Link>
              </div>
            </label>

            <label
              tabIndex={1}
              htmlFor="dashboard-sidebar"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
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
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

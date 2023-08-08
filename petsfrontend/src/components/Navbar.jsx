import { Link } from "react-router-dom";
import VetLogo from "../assets/vetLogo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200" data-theme="cupcake">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <summary>Pets</summary>
              <ul className="p-2">
                <li>
                  <Link to="/viewpets">View Pets</Link>
                </li>
                <li>
                  <Link to="/registpet">Regist Pet</Link>
                </li>
              </ul>
            </li>
            <li>
              <summary>Appointments</summary>
              <ul className="p-2">
                <li>
                  <Link to="/viewappointments">View Appointments</Link>
                </li>
                <li>
                  <Link to="/createappointment">Create Appointment</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost hidden normal-case text-xl h-16 w-24 lg:block" to="/">
          <img src={VetLogo} alt="vetLogo" width={80} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex z-40">
        <ul className="menu menu-horizontal px-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0} className="dropdown dropdown-hover">
            <summary>Pets</summary>
            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
              <li>
                <Link to="/viewpets">View Pets</Link>
              </li>
              <li>
                <Link to="/registpet">Regist Pet</Link>
              </li>
            </ul>
          </li>
          <li tabIndex={0} className="dropdown dropdown-hover">
            <summary>Appointments</summary>
            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-48">
              <li>
                <Link to="/viewappointments">View Appointments</Link>
              </li>
              <li>
                <Link to="/createappointment">Create Appointment</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-ghost normal-case text-xl h-16 w-24 lg:hidden" to="/">
          <img src={VetLogo} alt="vetLogo" width={80} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import { Link, Outlet } from "react-router-dom";

import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";

import "../App.css";
import UserPicker from "../components/Users/UserPicker";

function Layout() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/bookings" className="btn btn-header">
                <FaCalendarAlt />
                <span>Bookings</span>
              </Link>
            </li>
            <li>
              <Link to="/bookables" className="btn btn-header">
                <FaDoorOpen />
                <span>Bookables</span>
              </Link>
            </li>
            <li>
              <Link to="/users" className="btn btn-header">
                <FaUsers />
                <span>Users</span>
              </Link>
            </li>
          </ul>
        </nav>
        <UserPicker />
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;

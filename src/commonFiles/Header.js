import { Link } from "react-router-dom";
import {AiFillHome} from "react-icons/ai";

const Header = () => {
  return (
    <div className="header-container">
      <div className="navbar">
        <div className="logo">
          <Link className="logolink" to="/">
            <p>Your Logo</p>
          </Link>
        </div>
        <div className="listnavbar">
          <ul className="nav-list">
            <li>
              <Link className="links" to="/">
                <AiFillHome /> Home
              </Link>
            </li>
            <li>
              <Link className="links" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

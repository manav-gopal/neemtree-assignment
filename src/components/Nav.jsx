import { Link } from "react-router-dom";
import "./style/Nav.scss";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar_logo">Forms</div>
      <ul className="navbar_links">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/add-user"}>AddUser</Link>
        </li>
        <li>
          <Link to={"/edit-user"}>EditUser</Link>
        </li>
        <li>
          <Link to={"/user-list"}>UserList</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
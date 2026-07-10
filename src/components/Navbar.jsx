import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (

    <nav className="navbar">

      <h2 className="logo">
        Aryan Portfolio
      </h2>

      <div className="nav-menu">

        <NavLink to="/dashboard" className="nav-link">
          Home
        </NavLink>

        <NavLink to="/about" className="nav-link">
          About
        </NavLink>

        <NavLink to="/skills" className="nav-link">
          Skills
        </NavLink>

        <NavLink to="/projects" className="nav-link">
          Projects
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </nav>

  );

}

export default Navbar;
import { NavLink } from "react-router-dom";
import { FaFilm } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg mybgBlack">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <FaFilm className="mylogo"/>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/movies">
                  List Film
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
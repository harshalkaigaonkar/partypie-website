import React from "react";
import logo from "./logo.png";
import PropTypes from "prop-types";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <div className='complete-header header'>
      <header className='toolbar shadow-4'>
        <nav className='toolbar_navigation'>
          {/* <div>
          <DrawerToggleButton click={drawerClickHandler} />
        </div> */}
          <Link to='/'>
            {" "}
            <div className='toolbar_logo'>
              <img src={logo} alt={title} width='150px' height='55px' />
            </div>
          </Link>
          <div className='spacer' />
          <div className='toolbar_navigation_items'>
            <ul>
              <li>
                <Link to='/'>
                  <p className='link br-pill hover-white hover-bg-black dark-gray pa3 mt2 mb2 f5 f4-l dib'>
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link to='/about'>
                  <p className='link br-pill hover-white hover-bg-black dark-gray pa3 mt2 mb2 f5 f4-l dib'>
                    About
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "PARTYPIE",
};

export default Navbar;

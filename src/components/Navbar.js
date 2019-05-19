import React from "react";
import {Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) => {
    console.log(props)
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke' Times</a>
        <ul className="right">
          <li>
              <Link to='/'>Home</Link>
          </li>
          <li>
              {/* navlink jest jak link z tym ze dodaje klase 'active' do kliknietego elementu */}
          <NavLink to='/about'>About</NavLink>
          </li>
          <li>
          <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
// withRoutrer jest higher order component ktory opakuje Navbar i da dostep do props z Link/NavLink ktory normalnie by nie zadzialal
export default withRouter(Navbar);

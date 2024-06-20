
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <h1>Carlos Ruiz</h1>
      <nav>

        <NavLink to="/" className={({ isActive }) =>
          [
            'NavLink',
            isActive ? "active" : "",
          ].join(" ")
        }>About Me</NavLink>

        <NavLink to="/portfolio" className={({ isActive }) =>
          [
            'NavLink',
            isActive ? "active" : "",
          ].join(" ")
        }>Portfolio</NavLink>

        <NavLink to="/contact" className={({ isActive }) =>
          [
            'NavLink',
            isActive ? "active" : "",
          ].join(" ")
        }>Contact</NavLink>

        <NavLink to="/resume" className={({ isActive }) =>
          [
            'NavLink',
            isActive ? "active" : "",
          ].join(" ")
        }>Resume</NavLink>


      </nav>
    </header>
  );
};

export default Header;

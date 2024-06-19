
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Carlos Ruiz</h1>
      <nav>
        <NavLink exact to="/" className="link" ctiveClassName="active">About Me</NavLink>
        <NavLink to="/portfolio" className="link" activeClassName="active">Portfolio</NavLink>
        <NavLink to="/contact" className="link" activeClassName="active">Contact</NavLink>
        <NavLink to="/resume" className="link" activeClassName="active">Resume</NavLink>
      </nav>
    </header>
  );
};

export default Header;

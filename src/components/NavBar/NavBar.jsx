import "./NavBar.sass";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-item">Home</Link>
        </li>
        <li>
          <Link to="/mailboxes" className="nav-item">Mailboxes</Link>
        </li>
        <li>
          <Link to="/new-mailbox" className="nav-item">New Mailbox</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

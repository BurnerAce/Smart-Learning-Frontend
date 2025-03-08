import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button className="nav-toggle" onClick={toggleNavbar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar Navigation */}
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="logo">CodeSprint</div>
        <ul className="nav-links">
          <li><Link to="/" onClick={toggleNavbar}>Home</Link></li>
          <li><Link to="/leaderboard" onClick={toggleNavbar}>Leaderboard</Link></li>
          <li><Link to="/auth/login" onClick={toggleNavbar}>Login</Link></li>
          <li><Link to="/auth/register" onClick={toggleNavbar}>Register</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

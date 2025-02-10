import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="logo">خدمت آزما</span>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="#" className="nav-item">صفحه اصلی</a>
          <a href="#" className="nav-item">خدمات</a>
          <a href="#" className="nav-item">درباره ما</a>
          <a href="#" className="nav-item">تماس با ما</a>
          <div className="nav-buttons">
            <button className="login-btn">ورود</button>
            <button className="register-btn">ثبت نام</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
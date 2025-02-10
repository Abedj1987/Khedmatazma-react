import React from 'react';

const LinkPages = ({ title, links }) => {
  return (
    <nav className="col-6 col-md-6 col-lg-2 link-pages">
      <div className="subject">{title}</div>
      <ul className="items">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href}
              id={link.id}
              rel={link.rel}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LinkPages;
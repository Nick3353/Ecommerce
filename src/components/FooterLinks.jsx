
import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinks = ({ categories }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-20">
      {categories.map((category, index) => (
        <div key={index}>
          <h1 className="font-medium pb-3">{category.name}</h1>
          <ul className="flex flex-col gap-5">
            {category.links.map((link, idx) => (
              <li key={idx}>
                <Link to={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;

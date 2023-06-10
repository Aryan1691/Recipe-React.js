import React, { useEffect, useState } from 'react';
import { Sidebar } from './Sidebar';
import { BiHomeHeart } from 'react-icons/bi';
import { AiTwotoneSetting } from 'react-icons/ai';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [color, setColor] = useState("transparent");
  const [sidebar, showSidebar] = useState(false);
  localStorage.setItem("Home", "Home");

  const location = useLocation();
  const links = [
    { name: "Home", path: "/", icon: <BiHomeHeart /> },
    { name: "Recipes", path: "/recipes", icon: <AiTwotoneSetting /> }
  ];
  const links2 = [
    { name: "Chefs", path: "/#chef", icon: <AiOutlineUnorderedList /> }
  ];

  function closeSidebar() {
    showSidebar(false);
  }

  useEffect(() => {
    const changeColorOnScroll = () => {
      const scrollYPosition = window.scrollY;
      const scrollThreshold = 700;

      if (scrollYPosition > scrollThreshold || location.pathname === '/recipes') {
        setColor("white");
      } else {
        setColor("transparent");
      }
    };

    window.addEventListener('scroll', changeColorOnScroll);

    return () => {
      window.removeEventListener('scroll', changeColorOnScroll);
    };
  }, [location.pathname]);

  return (
    <React.Fragment>
      <nav className='navbar' style={{ backgroundColor: color }}>
        <Link to='/' className='logo'>Foodathon</Link>
        <div className="nav-links">
          {links.map((link, index) => (
            <Link
              key={index}
              className={location.pathname === link.path ? 'active' : ''}
              to={link.path}
            >
              {link.name}
            </Link>
          ))}

          {links2.map((link, index) => (
            <HashLink
              key={index}
              className={location.hash === link.path ? 'hashlink active' : 'hashlink'}
              smooth
              to={link.path}
            >
              {link.name}
            </HashLink>
          ))}
        </div>
        <div onClick={() => showSidebar(true)} className={sidebar ? 'sidebar-btn active' : 'sidebar-btn'}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
      {sidebar && <Sidebar close={closeSidebar} link={links} links={links2} />}
    </React.Fragment>
  );
}

export default Navbar;

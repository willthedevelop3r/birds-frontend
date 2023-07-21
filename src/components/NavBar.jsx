import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  // Array for navigation items
  const navItems = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Birds', link: '/birds' },
    { title: 'Generate', link: '/generate' },
  ];

  return (
    <nav className='flex items-center justify-between bg-gray-700 text-white p-4'>
      <div className='flex items-center font-bold text-2xl sm:text-3xl md:text-4xl'>
        Bird Generator
      </div>
      <div className='hidden sm:flex items-center text-m sm:text-l'>
        {navItems.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className='mr-4 text-m sm:text-l'
          >
            {item.title}
          </a>
        ))}
      </div>
      <div className='sm:hidden'>
        {showMenu ? (
          <AiOutlineClose
            className='text-2xl cursor-pointer'
            onClick={handleMenuToggle}
          />
        ) : (
          <GiHamburgerMenu
            className='text-2xl cursor-pointer'
            onClick={handleMenuToggle}
          />
        )}
      </div>
      {showMenu && (
        <div className='sm:hidden absolute top-16 right-0 left-0 bg-gray-700 p-4 w-full text-center'>
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className='block my-2 text-white'
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='flex items-center justify-between bg-gray-700 text-white p-4'>
      <div className='flex items-center font-bold text-2xl sm:text-3xl md:text-4xl pacifico'>
        Bird Generator
      </div>
      <div className='hidden sm:flex items-center text-m sm:text-l'>
        <a href='/' className='mr-4 text-m sm:text-l'>
          Home
        </a>
        <a href='/about' className='mr-4 text-m sm:text-l'>
          About
        </a>
        <a href='/birds' className='mr-4 text-m sm:text-l'>
          Birds
        </a>
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
          <a href='/' className='block my-2 text-white'>
            Home
          </a>
          <a href='/about' className='block my-2 text-white'>
            About
          </a>
          <a href='/birds' className='block my-2 text-white'>
            Birds
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-gray-700 text-white p-4'>
      <div className='flex items-center font-bold text-2xl sm:text-3xl md:text-4xl pacifico'>
        Bird Generator
      </div>
      <div className='flex items-center text-m sm:text-l'>
        <a href='/' className='mr-2 sm:mr-4 text-m sm:text-l'>
          Home
        </a>
        <a href='/about' className=' mr-2 sm:mr-4 text-m sm:text-l'>
          About
        </a>
        <a href='/birds' className='text-m sm:text-l'>
          Birds
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

import DarkModeToggle from '../../components/DarkModeToggle/DarkModeToggle';

const Header = () => {
  return (
    <header>
      <nav className='py-2 bg-white dark:bg-gray-600'>
        <DarkModeToggle />
        <h1 className='font-semibold text-theme-dark dark:text-white'>
          Header
        </h1>
      </nav>
    </header>
  );
};

export default Header;

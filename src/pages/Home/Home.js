import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';

import homePageBgImg from '../../assets/images/home-page-opacity.png';
import Logo from '../../assets/images/logo.png';

const Home = () => {
  return (
    <div
      className='h-screen bg-opacity-50 bg-no-repeat bg-right-top bg-contain'
      style={{ backgroundImage: `url("${homePageBgImg}")` }}
    >
      <div className='container mx-auto px-6 pt-10'>
        <div className='mb-20'>
          <Link to='/'>
            <img src={Logo} alt='logo' />
          </Link>
        </div>
        <div className='md:w-4/12'>
          <h1 className='text-2xl md:text-4xl text-theme-dark dark:text-white font-semibold mb-3'>
            Join over 50 millions people sharing recipes everyday
          </h1>
          <p className='mb-5'>
            Never run out of ideas again. Try new foods, ingredients, cooking
            style, and more
          </p>
          <div className='flex gap-3'>
            <Link to='/signin'>
              <Button
                type='button'
                className='py-2 px-3 bg-theme-main-color text-white w-full'
              >
                Join Scratch
              </Button>
            </Link>
            <Button
              type='button'
              className='py-2 px-3 text-theme-main-color w-full border-2 border-solid border-theme-main-color'
              style={{ borderWidth: '2px' }}
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

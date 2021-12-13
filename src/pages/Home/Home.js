import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';

import homePageBgImg from '../../assets/images/home-page-opacity.png';
import Logo from '../../assets/images/logo.png';

import Classes from './Home.module.scss';
import '../../assets/scss/variables.scss';

const Home = () => {
  return (
    <div
      className={Classes.homePageWrapper}
      style={{ backgroundImage: `url("${homePageBgImg}")` }}
    >
      <div className='container'>
        <div className='mb-5 pt-5'>
          <Link to='/'>
            <img src={Logo} alt='logo' />
          </Link>
        </div>
        <div className='col-md-5'>
          <h1 className={Classes.title}>
            Join over 50 millions people sharing recipes everyday
          </h1>
          <p className={`mt-3 mb-5 ${Classes.text}`}>
            Never run out of ideas again. Try new foods, ingredients, cooking
            style, and more
          </p>
          <div className='d-flex flex-wrap flex-md-nowrap'>
            <Link to='/signin' className='w-100 mb-2 mb-md-0'>
              <Button type='button' className='btn-solid py-2 px-3 w-100'>
                Join Scratch
              </Button>
            </Link>
            <Button type='button' className='btn-outline py-2 px-3 w-100 ms-3'>
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

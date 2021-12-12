import Logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';

import Classes from './AuthLayout.module.scss'

import Authbgimg from '../../../assets/images/auth-bg.png';
import AuthInnerbgimg from '../../../assets/images/auth-inner.png';

const AuthLayout = ({ children }) => {
  return (
    <div
      className={Classes.authLayoutWarapper}
      style={{ backgroundImage: `url("${Authbgimg}")` }}
    >
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap'>
          <div
            className='w-full md:w-6/12 bg-contain bg-no-repeat bg-left-top h-full'
            style={{ backgroundImage: `url("${AuthInnerbgimg}")` }}
          >
            <Link to='/'>
              <img src={Logo} alt='logo' />
            </Link>
          </div>
          <div className='w-full md:w-6/12 bg-white'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

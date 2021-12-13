import Logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';

import Classes from './AuthLayout.module.scss';

import Authbgimg from '../../../assets/images/auth-bg.png';
import AuthInnerbgimg from '../../../assets/images/auth-inner.png';

const AuthLayout = ({ children }) => {
  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center ${Classes.authLayoutWarapper}`}
      style={{ backgroundImage: `url("${Authbgimg}")` }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className={`row ${Classes.card}`}>
              <div
                className={`col-md-6 d-none d-md-flex flex-column align-items-center justify-content-center ${Classes.bgLeftContainer}`}
                style={{ backgroundImage: `url("${AuthInnerbgimg}")` }}
              >
                <Link to='/'>
                  <img src={Logo} alt='logo' />
                </Link>
              </div>
              <div className='col-md-6'>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

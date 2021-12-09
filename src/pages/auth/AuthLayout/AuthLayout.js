import Logo from '../../../assets/images/logo.png';

import Authbgimg from '../../../assets/images/auth-bg.png';
import AuthInnerbgimg from '../../../assets/images/auth-inner.png';

const AuthLayout = ({ children }) => {
  return (
    <div
      className='h-screen bg-no-repeat bg-right-top bg-contain overflow-auto'
      style={{ backgroundImage: `url("${Authbgimg}")` }}
    >
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap'>
          <div
            className='w-full md:w-6/12 bg-contain bg-no-repeat bg-left-top h-full'
            style={{ backgroundImage: `url("${AuthInnerbgimg}")` }}
          >
            <img src={Logo} alt='logo' />
          </div>
          <div className='w-full md:w-6/12 bg-white'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

import DarkModeToggle from '../../components/DarkModeToggle/DarkModeToggle';
import Classes from './Header.module.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import User from './partials/User';
import FormInput from '../../components/FormInput/FormInput';
// icons
import Message from '../../components/Icons/Message';
import Bell from '../../components/Icons/Bell';

const Header = () => {
  return (
    <header className={`py-2 ${Classes.headerWrapper}`}>
      <nav>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='row'>
                <div className={`col-md-3 ${Classes.logoItem}`}>
                  <Link to='/'>
                    <img src={Logo} alt='logo' />
                  </Link>
                </div>

                <div className='col-md-6 flex-grow-1 my-3 my-md-0'>
                  <FormInput placeholder='Search Recipe, Profile, or ingredients' />
                </div>

                <div className='col-md-3 d-flex align-items-center justify-content-end'>
                  <span>
                    <Bell />
                  </span>
                  <span className='mx-2'>
                    <Message />
                  </span>
                  <span className='me-2'>
                    <User />
                  </span>
                  <span>
                    <DarkModeToggle />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

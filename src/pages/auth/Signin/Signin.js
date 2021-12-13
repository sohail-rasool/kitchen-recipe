import { Link } from 'react-router-dom';
import AuthLayout from '../AuthLayout/AuthLayout';
import FormInput from '../../../components/FormInput/FormInput';
import Button from '../../../components/Button/Button';
import Classes from '../Auth.module.scss';

const Signin = () => {
  return (
    <AuthLayout>
      <div className={`py-5 pe-0 pe-md-5 ${Classes.authWrapper}`}>
        <h3 className={`mb-2 ${Classes.title}`}>Welcome Back!</h3>
        <p className={`${Classes.text}`}>Please login to continue</p>
        <form className='mt-5'>
          <div className='mb-5'>
            <FormInput
              id='emailAddress'
              label='Email Address'
              type='email'
              placeholder='example@comp.com'
            />
          </div>
          <div className='mb-5'>
            <FormInput
              id='userPassword'
              label='Password'
              type='password'
              placeholder='*****'
            />
          </div>
          <Button className='btn-solid px-4 py-3 w-100 mb-3'>Login</Button>
          <div className='text-center'>
            <p className={`mb-3 ${Classes.text}`}>New To Scratch ?</p>
            <h4>
              <Link className={Classes.linkItem} to='/signup'>
                Create Account Here
              </Link>
            </h4>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Signin;

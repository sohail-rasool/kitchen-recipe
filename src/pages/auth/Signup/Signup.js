import { Link } from 'react-router-dom';
import AuthLayout from '../AuthLayout/AuthLayout';
import FormInput from '../../../components/FormInput/FormInput';
import Button from '../../../components/Button/Button';
import Classes from '../Auth.module.scss';

const Signup = () => {
  return (
    <AuthLayout>
      <div className={`py-5 pe-0 pe-md-5 ${Classes.authWrapper}`}>
        <h3 className={`mb-2 ${Classes.title}`}>Start From Scratch</h3>
        <p className={`${Classes.text}`}>Create Account To Continue</p>
        <form className='mt-5'>
          <div className='mb-5'>
            <FormInput
              id='fullName'
              label='Full Name'
              type='text'
              placeholder='example Name'
            />
          </div>
          <div className='mb-5'>
            <FormInput
              id='userEmail'
              label='Email Address'
              type='email'
              placeholder='user@email.com'
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
          <Button className='btn-solid px-4 py-3 w-100 mb-3'>Signup</Button>
          <div className='text-center'>
            <p className={`mb-3 ${Classes.text}`}>Already have an account ?</p>
            <h4>
              <Link className={Classes.linkItem} to='/signin'>
                Login here
              </Link>
            </h4>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Signup;

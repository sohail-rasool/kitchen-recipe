import Classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={`py-3 ${Classes.Footer}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center'>
              © Copyright {new Date().getFullYear()} Company Name. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

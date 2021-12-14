import Header from './Header/Header';
import Footer from './Footer/Footer';

const MainLayout = ({ children, leftBar, rightBar }) => {
  const leftSideBar = () => {
    if (leftBar) {
      return 'col-md-3';
    }
    return 'd-none';
  };

  const mainContainer = () => {
    if (leftBar && rightBar) {
      return 'col-md-6';
    } else if (leftBar && rightBar === false) {
      return 'col-md-9';
    } else {
      return 'col-12';
    }
  };

  const rightSideBar = () => {
    if (rightBar) {
      return 'col-md-3';
    }
    return 'd-none';
  };

  return (
    <>
      <div>
        <Header />
        <main className='mt-5'>
          <div className='container'>
            <div className='row'>
              <div className={leftSideBar()}>{leftBar}</div>
              <div className={mainContainer()}>{children}</div>
              <div className={rightSideBar()}>{rightBar}</div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;

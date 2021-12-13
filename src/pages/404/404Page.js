import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const Page404 = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='text-center mt-5'>Not Found</h1>
          <Button className='btn-solid p-4'>
            <Link to='/'>Back To Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page404;

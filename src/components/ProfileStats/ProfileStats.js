import Card from '../Card/Card';
import Classes from './ProfileStats.module.scss';
import Avatar from '../../assets/images/avatar.png';

const ProfileStats = () => {
  return (
    <Card className='p-4'>
      <div
        className={`d-flex align-items-center pb-3 mb-3 ${Classes.profileHeader}`}
      >
        <div className='me-3'>
          <img src={Avatar} alt='user img' />
        </div>
        <div>
          <h3 className={Classes.name}>Nick Evans</h3>
          <div className={Classes.metaInfo}>
            <p className='mt-1'>Potato Master</p>
            <div className='mt-2 d-flex align-items-center'>
              <span>548 followers</span>{' '}
              <span className={`mx-2 ${Classes.dot}`}></span>{' '}
              <span>23k Likes</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`d-flex justify-content-between ${Classes.profileFooter}`}
      >
        <div className='text-center'>
          <h4>20</h4>
          <p>Recipes</p>
        </div>
        <div className='text-center'>
          <h4>75</h4>
          <p>Saved</p>
        </div>
        <div className='text-center'>
          <h4>248</h4>
          <p>Following</p>
        </div>
      </div>
    </Card>
  );
};

export default ProfileStats;

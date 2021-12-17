import Card from '../Card/Card';
import Avatar from '../../assets/images/avatar.png';

const MostActiveToday = () => {
  const imgStyle = () => {
    return {
      height: '40px',
      width: '40px',
      borderRadius: '50%',
      objectFit: 'cover',
    };
  };

  return (
    <Card className='p-4'>
      <h3 className='mb-3'>Most Active Today</h3>
      <div className='d-flex align-items-center justify-content-between'>
        <div>
          <img src={Avatar} alt='active users' style={imgStyle()} />
        </div>
        <div>
          <img src={Avatar} alt='active users' style={imgStyle()} />
        </div>
        <div>
          <img src={Avatar} alt='active users' style={imgStyle()} />
        </div>
        <div>
          <img src={Avatar} alt='active users' style={imgStyle()} />
        </div>
        <div>
          <img src={Avatar} alt='active users' style={imgStyle()} />
        </div>
      </div>
    </Card>
  );
};

export default MostActiveToday;

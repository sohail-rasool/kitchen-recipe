import Avatar from '../../assets/images/avatar.png';
import recipeImg from '../../assets/images/recipeImg.jpeg';

import Classes from './FeedCard.module.scss';

import Card from '../Card/Card';
import Like from '../Icons/Like';
import Button from '../Button/Button';

const FeedCard = () => {
  return (
    <Card className='mb-3'>
      <div className='p-2'>
        <div className='d-flex align-items-center'>
          <div className='me-2'>
            <img className={Classes.userImg} src={Avatar} alt='user img' />
          </div>
          <div>
            <span className={Classes.name}>Tamaki Ryushi</span>
            <p className={Classes.time}>2h ago</p>
          </div>
        </div>
      </div>
      <div>
        <img
          className={`w-100 ${Classes.recipeImg}`}
          src={recipeImg}
          alt='recipeImg'
        />
      </div>
      <div className='p-4'>
        <div className='d-flex align-items-center justify-content-between mb-3'>
          <h3>Tofu Salad Ginger Garlic</h3>
          <Like />
        </div>
        <p className={`mb-4 ${Classes.text}`}>
          I thought this salad was exceptionally delicious and healthy. I
          recommend pressing the entire tofu block for at least 20 minutes
          before to remove excess water in the ...
        </p>
        <div className='d-flex flex-wrap align-items-center justify-content-between'>
          <div className={`d-flex align-items-center ${Classes.text}`}>
            <span>38 Likes</span>
            <span className={`mx-2 ${Classes.dot}`}></span>
            <span>8 Comments</span>
          </div>
          <div>
            <Button className='btn-outline py-2 px-3'>+ Save</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FeedCard;

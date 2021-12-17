import MainLayout from '../../layout/MainLayout';
import LeftAside from '../../layout/Aside/LeftAside';
import RightAside from '../../layout/Aside/RightAside';

import Card from '../../components/Card/Card';
import FeedCard from '../../components/FeedCard/FeedCard';

import CreateRecipe from '../../components/CreateRecipe/CreateRecipe';

const Feed = () => {
  return (
    <MainLayout leftBar={<LeftAside />} rightBar={<RightAside />}>
      <div className='mb-3'>
        <CreateRecipe />
      </div>
      <Card className='p-4'>
        <FeedCard />
      </Card>
    </MainLayout>
  );
};

export default Feed;

import MainLayout from '../../layout/MainLayout';
import LeftAside from '../../layout/Aside/LeftAside';
import RightAside from '../../layout/Aside/RightAside';

import CreateRecipe from '../../components/CreateRecipe/CreateRecipe';

const Feed = () => {
  return (
    <MainLayout leftBar={<LeftAside />} rightBar={<RightAside />}>
      <div className='mb-3'>
        <CreateRecipe />
      </div>
    </MainLayout>
  );
};

export default Feed;

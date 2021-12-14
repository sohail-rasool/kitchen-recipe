import MainLayout from '../../layout/MainLayout';
import LeftAside from '../../layout/Aside/LeftAside';
import RightAside from '../../layout/Aside/RightAside';

const Feed = () => {
  return (
    <MainLayout leftBar={<LeftAside />} rightBar={<RightAside />}>
      Feed Page
    </MainLayout>
  );
};

export default Feed;

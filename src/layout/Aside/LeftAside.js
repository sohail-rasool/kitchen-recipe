import ProfileStats from '../../components/ProfileStats/ProfileStats';
import StatsTopList from '../../components/StatsTopList/StatsTopList';

const LeftAside = () => {
  return (
    <aside>
      <div className='mb-3'>
        <ProfileStats />
      </div>
      <div>
        <StatsTopList />
      </div>
    </aside>
  );
};

export default LeftAside;

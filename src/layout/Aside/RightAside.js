import LiveCookingVideo from '../../components/LiveCookingVideo/LiveCookingVideo';
import MostActiveToday from '../../components/MostActiveToday/MostActiveToday';
import SiderbarFooter from '../../components/SidebarFooter/SiderbarFooter';
const RightAside = () => {
  return (
    <aside>
      <div className='mb-3'>
        <LiveCookingVideo />
      </div>
      <div className='mb-3'>
        <MostActiveToday />
      </div>
      <div>
        <SiderbarFooter />
      </div>
    </aside>
  );
};

export default RightAside;

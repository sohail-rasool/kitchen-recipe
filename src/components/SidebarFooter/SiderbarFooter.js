import Card from '../Card/Card';
import Classes from './SiderbarFooter.module.scss';
const SiderbarFooter = () => {
  return (
    <Card className='p-4'>
      <p
        className={`mb-3 d-flex justify-content-between align-items-center ${Classes.text}`}
      >
        <span>About scratch</span>
        <span>Help Center</span>
        <span>Privacy Policy</span>
      </p>
      <p className={Classes.text}>© scratch by Invision 2019</p>
    </Card>
  );
};

export default SiderbarFooter;

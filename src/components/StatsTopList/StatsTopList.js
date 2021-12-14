import Card from '../Card/Card';
import Classes from './StatsTopList.module.scss';
const StatsTopList = () => {
  return (
    <Card className='p-4'>
      <div className={Classes.topRecipes}>
        <h3 className='mb-3'>Top 5 Recipe today</h3>
        <ul>
          <li>Tea-Smoked Creamy Chicken</li>
          <li>Pickled Savory Tortilla</li>
          <li>Stuffed Basil & Mint Salmon</li>
          <li>Strawberry Jelly</li>
          <li>Cinnamon and Lime Toffee</li>
        </ul>
      </div>
    </Card>
  );
};

export default StatsTopList;

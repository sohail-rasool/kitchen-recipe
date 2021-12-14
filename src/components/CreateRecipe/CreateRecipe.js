import Card from '../Card/Card';
import Button from '../Button/Button';
const CreateRecipe = () => {
  return (
    <Card className='px-3 py-4 d-flex justify-content-between align-items-center'>
      <p>
        <span>286</span> of your followers are online
      </p>
      <Button className='btn-solid px-3 py-2'>Create Recipe</Button>
    </Card>
  );
};

export default CreateRecipe;

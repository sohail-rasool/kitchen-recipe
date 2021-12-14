import Classes from './Card.module.scss';

const Card = ({ className, children }) => {
  return <div className={`${Classes.Card} ${className}`}>{children}</div>;
};

export default Card;

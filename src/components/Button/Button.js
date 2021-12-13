import './Button.scss';

const Button = ({ children, className, ...items }) => {
  return (
    <button className={`Button ${className}`} {...items}>
      {children}
    </button>
  );
};

export default Button;

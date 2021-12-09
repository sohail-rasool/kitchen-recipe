const Button = ({ children, className, ...items }) => {
  return (
    <button
      className={`btn rounded-md cursor-pointer hover:bg-theme-light-main-color hover:text-theme-dark ${className}`}
      {...items}
    >
      {children}
    </button>
  );
};

export default Button;

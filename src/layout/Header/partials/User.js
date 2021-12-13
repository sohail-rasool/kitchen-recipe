import Avatar from '../../../assets/images/avatar.png';

const User = () => {
  const avatarStyle = () => {
    return {
      height: '30px',
    };
  };
  return (
    <>
      <img src={Avatar} alt='user img' style={avatarStyle()} />
    </>
  );
};

export default User;

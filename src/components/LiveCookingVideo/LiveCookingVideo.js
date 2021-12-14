import Card from '../Card/Card';

const LiveCookingVideo = () => {
  const iFramStyle = () => {
    return {
      maxWidth: '100%',
    };
  };
  return (
    <Card className='p-4'>
      <h3 className='mb-3'>Live Cooking By Scratch</h3>
      <iframe
        style={iFramStyle()}
        src='https://www.youtube.com/embed/EngW7tLk6R8?autoplay=1&mute=1'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
      />
    </Card>
  );
};

export default LiveCookingVideo;

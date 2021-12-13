const Message = () => {
  const iconColor = () => {
    return {
      stroke: `var(--icon-color)`,
    };
  };

  return (
    <svg
      style={iconColor()}
      id='Icon_Messages'
      data-name='Icon Messages'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        style={iconColor()}
        id='Rectangle_Copy'
        data-name='Rectangle Copy'
        d='M0,0,7,5'
        transform='translate(5 7.5)'
        fill='none'
        stroke='#363837'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1'
      />
      <path
        style={iconColor()}
        id='Rectangle_Copy-2'
        data-name='Rectangle Copy'
        d='M7,0,0,5'
        transform='translate(12 7.5)'
        fill='none'
        stroke='#363837'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1'
      />
      <rect
        style={iconColor()}
        id='Rectangle'
        width='14'
        height='10'
        transform='translate(5 7)'
        fill='none'
        stroke='#363837'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1'
      />
    </svg>
  );
};

export default Message;

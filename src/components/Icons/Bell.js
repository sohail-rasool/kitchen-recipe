const Bell = () => {
  const iconColor = () => {
    return {
      stroke: `var(--icon-color)`,
    };
  };
  return (
    <svg
      style={iconColor()}
      id='Icon_Notifications'
      data-name='Icon Notifications'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        style={iconColor()}
        id='Oval'
        d='M0,10H12V6A6,6,0,0,0,0,6Z'
        transform='translate(6 7)'
        fill='none'
        stroke='#363837'
        strokeMiterlimit='10'
        strokeWidth='1'
      />
      <rect
        style={iconColor()}
        id='Rectangle'
        width='2'
        height='1'
        transform='translate(11 5)'
        fill='none'
        stroke='#363837'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1'
      />
      <path
        style={iconColor()}
        id='Rectangle_Copy'
        data-name='Rectangle Copy'
        d='M0,.5H10'
        transform='translate(7 18.5)'
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

export default Bell;

import React, { useState, useEffect } from 'react';
import Moon from '../Icons/Moon/Moon';
import Sun from '../Icons/Sun/Sun';

const getStorageTheme = () => {
  let theme = 'light';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const SwitchTheme = () => {
  const [theme, setTheme] = useState(getStorageTheme());
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <>
      <span onClick={toggleTheme}>
        {theme === 'light' ? <Sun /> : <Moon />}
      </span>
    </>
  );
};

export default SwitchTheme;

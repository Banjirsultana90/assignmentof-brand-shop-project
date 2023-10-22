import React from 'react';

const Theme = () => {
    const [Theme, setTheme] = React.useState('light');
    const toggleTheme = () => {
      setTheme(Theme === 'dark' ? 'light' : 'dark');
    };
    
    React.useEffect(() => {
      document.querySelector('html').setAttribute('data-theme', Theme);
    }, [Theme]);
  
    return (
      <label className="swap swap-rotate">
        <input onClick={toggleTheme} type="checkbox" />
        <div className="swap-on">DARK</div>
        <div className="swap-off">LIGHT</div>
      </label>
    );
};

export default Theme;


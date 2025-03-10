import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ThemeToggle = () => {
  // Definir tema inicial corretamente
  const savedTheme = localStorage.getItem('theme');
  const [isDarkMode, setIsDarkMode] = useState(savedTheme === 'dark');

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }

    // 🔥 Disparar um evento para notificar outros componentes
    window.dispatchEvent(new Event('themeChange'));

  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <StyledWrapper>
      <label className="switch" htmlFor="switch">
        <input
          id="switch"
          type="checkbox"
          className="circle"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" className="moon svg">
          <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
        </svg>
        <div className="sun svg">
          <span className="dot" />
        </div>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* The switch container */
  .switch {
    --transition: 300ms;
    --transition500: 500ms;
    --color-dark: #0c0f14;
    --color-darkGray: #21262e;
    --color-gray: #52555a;
    --color-offwhite: #cecece;
    --shadow-color: var(--color-dark);
    position: relative;
    display: flex;
    align-items: center;
    width: 60px;
    height: fit-content;
    background-color: var(--color-dark);
    border-radius: 30px;
    padding: 4px;
    transition: var(--transition500);
    user-select: none;
    cursor: pointer;
    overflow: hidden;
  }

  /* Svg styles */
  .switch .svg {
    transition: var(--transition);
    position: absolute;
    left: 5px;
  }
  .switch .moon {
    width: 18px;
    fill: var(--color-gray);
    opacity: 1;
  }

  .switch .sun {
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    left: calc(100% - 21.5px);
    top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    scale: 0.8;
    opacity: 0;
  }

  .switch .sun .dot {
    position: relative;
    display: block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: white;
    z-index: 1;
    box-shadow: 11px 0px 0px var(--shadow-color),
      10.3px 0px 0px var(--shadow-color), -11px 0px 0px var(--shadow-color),
      -10.3px 0px 0px var(--shadow-color), 0px -11px 0px var(--shadow-color),
      0px -10.3px 0px var(--shadow-color), 0px 11px 0px var(--shadow-color),
      0px 10.3px 0px var(--shadow-color), 8px 8px 0px var(--shadow-color),
      7.3px 7.3px 0px var(--shadow-color), 8px -8px 0px var(--shadow-color),
      7.3px -7.3px 0px var(--shadow-color), -8px -8px 0px var(--shadow-color),
      -7.3px -7.3px 0px var(--shadow-color), -8px 8px 0px var(--shadow-color),
      -7.3px 7.3px 0px var(--shadow-color);
  }

  .switch .sun .dot::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
    border: 2px solid var(--color-dark);
  }

  /*checkbox styles */
  .switch .circle {
    appearance: none;
    position: relative;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    left: 0;
    background-color: var(--color-darkGray);
    border: 1px solid var(--color-darkGray);
    transition: var(--transition500);
    box-shadow: 1px 1px 20px 3px var(--color-darkGray);
  }

  .switch:has(.circle:checked) {
    background: var(--color-offwhite);
  }

  .switch .circle:hover {
    margin-left: 3px;
  }
  .switch .circle:checked:hover {
    margin-left: -3px;
  }

  .switch .circle:checked {
    left: calc(100% - 24px);
    background: white;
    border-color: white;
    box-shadow: 1px 1px 30px 12px white;
  }

  .switch:has(.circle:checked) > .sun {
    opacity: 1;
  }

  .switch:has(.circle:checked) > .moon {
    opacity: 0;
  }
`;

export default ThemeToggle;

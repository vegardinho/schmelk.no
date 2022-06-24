import { Typography } from '@material-ui/core';
import React from 'react';
import { useLocation } from 'react-router-dom';
import StyledLink from './StyledLink';
import StyledButton from './StyledButton';

export default function LinkButton({ item, setMenuOpened }) {
  const location = useLocation();

  // Prevent site from rendering if same path
  const beforeUnloadListener = (event) => {
    if (location.pathname === item.path) {
      event.preventDefault();
    }
    if (setMenuOpened) {
      setMenuOpened(false);
    }
  };

  const newDynamicPath = (event, script) => {
    beforeUnloadListener(event);
    const win = window.open(script(), '_blank');
    win.focus();
  };

  return (
    <>
      {item.dynamicPath
      && (
      <StyledButton
        handleClick={newDynamicPath}
        arg={item.dynamicPath}
      >
        <Typography>{item.text}</Typography>
      </StyledButton>
      )}
      { !item.dynamicPath && (
      <StyledLink to={item.path} target={item.external ? '_blank' : null}>
        <StyledButton
          handleClick={beforeUnloadListener}
        >
          <Typography>{item.text}</Typography>
        </StyledButton>
      </StyledLink>
      )}
    </>
  );
}

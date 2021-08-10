import React from 'react';
import { makeStyles, Container } from '@material-ui/core';

import LinkButton from './simple/LinkButton';

const useStyles = makeStyles({
  menu: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
});

export default function ButtonList({ items, children }) {
  const classes = useStyles();

  return (
    <Container className={classes.menu}>
      {items.map((item) => (
        // item.dynamicPath && <StyledButton handleEvent={item.dynamicPath}/>
        <LinkButton item={item} key={item.text} />
      ))}
      <>{children}</>
    </Container>
  );
}

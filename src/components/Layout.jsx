import { Container } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';

import React from 'react';

const useStyles = makeStyles({
  content: ({ theme }) => ({
    marginTop: theme.mixins.toolbar.minHeight,
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight * 2.5}px)`, // Subtract tollbar, plus browser UI ≈ 1.5 x toolbar
    display: 'flex',
    alignItems: 'center',
  }),
});

export default function Layout({ children }) {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.content}>
      <Container maxWidth="sm">
        <>{children}</>
      </Container>
    </div>
  );
}

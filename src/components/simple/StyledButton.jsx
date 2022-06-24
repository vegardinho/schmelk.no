import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Button, useTheme } from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    margin: ({ theme }) => `${theme.spacing(1)}px ${theme.spacing(1)}px`,

    background: ({ theme }) => theme.palette.secondary.main,

    '& span p': {
      color: ({ theme }) => theme.palette.primary.light,
    },

    '&:hover': {
      background: ({ theme }) => theme.palette.secondary.main,
    },

    '&:hover span p': {
      color: ({ theme }) => theme.palette.primary.main,
    },

    '&:hover span span svg': {
      color: ({ theme }) => theme.palette.primary.dark,
    },

    '&:active': {
      background: ({ theme }) => theme.palette.secondary.light,
    },
  },

  arrow: {
    color: ({ theme }) => theme.palette.primary.light,
  },
});

export default function StyledButton({
  buttonType, handleClick, arg, children,
}) {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <Button
      type={buttonType || null}
      onClick={(e) => handleClick(e, arg)}
      disableRipple
      className={classes.button}
      variant="contained"
      disableElevation
      endIcon={<ArrowForwardIosIcon className={classes.arrow} />}
    >
      <>{children}</>
    </Button>
  );
}

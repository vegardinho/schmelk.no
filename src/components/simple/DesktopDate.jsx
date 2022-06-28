import React from 'react';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@material-ui/core';

const useStyles = makeStyles({
  text: {
    '& > *': {
      fontFamily: ({ theme }) => `${theme.typography.fontFamily} !important`,
    },
    '& > div': {
      fontSize: '1.2em !important',
    },
  },

});

export default function DesktopDate({ label, handleDate }) {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [value, setValue] = React.useState(null);

  return (
    <DatePicker
      label={label}
      inputFormat="dd/MM/yyyy"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        handleDate(newValue);
      }}
      renderInput={(params) => <TextField className={classes.text} {...params} />}
      shouldDisableTime={false}
    />
  );
}

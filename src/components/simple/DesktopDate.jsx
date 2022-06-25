import React from 'react';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';

export default function DesktopDate({ label, handleDate }) {
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
      renderInput={(params) => <TextField {...params} />}
      shouldDisableTime={false}
    />
  );
}

import React from 'react';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';

export default function DesktopDate({ label }) {
  const [value, setValue] = React.useState(new Date());

  return (
    <DatePicker
      label={label}
      inputFormat="dd/MM/yyyy"
      value={value}
      onChange={(newValue) => setValue(newValue)}
      renderInput={(params) => <TextField {...params} />}
      shouldDisableTime={false}
    />
  );
}

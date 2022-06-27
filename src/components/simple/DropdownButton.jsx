import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function DropdownButton({ title, handleType }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const items = ['KU', 'SSF'];

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">{title}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        onChange={(event) => {
          setValue(event.target.value);
          handleType(items[event.target.value].toLowerCase());
        }}
        value={value}
        label="Type"
      >
        {items.map((item) => (
          <MenuItem key={item} value={items.indexOf(item)}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@material-ui/core/styles';
import { spawn } from 'child_process';
import PageTemplate from './templates/PageTemplate';
import DesktopDate from '../components/simple/DesktopDate';
import DropdownButton from '../components/simple/DropdownButton';
import StyledButton from '../components/simple/StyledButton';

const useStyles = makeStyles({
  textfield: {
    width: '100%',
  },

  form: {
    marginBottom: ({ theme }) => theme.spacing(5),
  },
});

export default function EventScrape() {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [textLoaded, setTextLoaded] = useState(false);
  const [output, setOutput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const py = spawn('python', ['../external/ku-scrape.py', 'KU 2019']);
    let data2send;
    py.stdout.on('data', (data) => {
      data2send = data.toString();
    });

    console.log(data2send);
    setTextLoaded(true);
    setOutput('Har kjørt!');
  };

  return (
    <PageTemplate>

      <form onSubmit={handleSubmit} className={classes.form}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DesktopDate label="Fra" />
            <DesktopDate label="Til" />
            <DropdownButton title="Type" items={['KU', 'SSF']} />
            <StyledButton buttonType="submit" handleClick={() => {}}>
              <Typography>Kjør magi!</Typography>
            </StyledButton>
          </Stack>
        </LocalizationProvider>
      </form>
      {textLoaded && <TextField defaultValue={output} className={classes.textfield} multiline maxRows={4} />}
    </PageTemplate>
  );
}

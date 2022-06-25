import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@material-ui/core/styles';
import axios from 'axios';
import PageTemplate from './templates/PageTemplate';
import DesktopDate from '../components/simple/DesktopDate';
import DropdownButton from '../components/simple/DropdownButton';
import StyledButton from '../components/simple/StyledButton';
import Modal from '../components/Modal';

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
  const eventItems = ['KU', 'SSF'];
  const [eventData, setEventData] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [eventType, setEventType] = useState('');
  const [showModal, setShowModal] = useState(false);

  function getData() {
    axios.post('/events', { fromDate, toDate, eventType })
      .then((response) => {
        const res = response.data;
        setEventData(res.text);
        navigator.clipboard.writeText(res.text);
        setShowModal(true);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fromDate === '') {
      return;
    }
    if (toDate === '') {
      return;
    }
    getData();
  };

  return (
    <PageTemplate>
      <Modal showModal={showModal} alertClick={() => setShowModal(false)} />
      <form onSubmit={handleSubmit} className={classes.form}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DesktopDate label="Fra" handleDate={(date) => setFromDate(date)} />
            <DesktopDate label="Til" handleDate={(date) => setToDate(date)} />
            <DropdownButton
              title="Type"
              items={eventItems}
              handleType={(type) => setEventType(eventItems[type].toLowerCase())}
            />
            <StyledButton buttonType="submit" handleClick={() => {}}>
              <Typography>Kjør magi!</Typography>
            </StyledButton>
          </Stack>
        </LocalizationProvider>
      </form>
    </PageTemplate>
  );
}

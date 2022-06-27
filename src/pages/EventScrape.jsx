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
    width: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  stack: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  datepicker: {
    paddingTop: ({ theme }) => theme.spacing(1),
    paddingBottom: ({ theme }) => theme.spacing(1),
  },

  title: ({ theme }) => ({
    textAlign: 'center',
    paddingTop: '4vh',
    paddingBottom: theme.spacing(4),
    maxWidth: '400px',
    marginLeft: 'auto !important',
    marginRight: 'auto !important',

    [theme.breakpoints.down('xs')]: {
      maxWidth: '290px',
      paddingTop: '15vh',
      fontSize: '1.3rem !important',
    },
  }),
});

export default function EventScrape() {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [eventData, setEventData] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [eventType, setEventType] = useState('');
  const [showModal, setShowModal] = useState(false);

  const title = 'FINN ARRANGEMENTER';

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
    console.log(eventType);
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
      <Typography
        variant="h5"
        className={classes.title}
      >
        {title}
      </Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div className={classes.stack}>
            <div>
              <DesktopDate
                label="Fra"
                handleDate={(date) => setFromDate(date)}
              />
            </div>
            <div className={classes.datepicker}>
              <DesktopDate label="Til" handleDate={(date) => setToDate(date)} />
            </div>
            <DropdownButton
              title="Type"
              handleType={(type) => setEventType(type)}
            />
            <StyledButton buttonType="submit" handleClick={() => {}}>
              <Typography>Kjør magi!</Typography>
            </StyledButton>
          </div>
        </LocalizationProvider>
      </form>
      <Modal showModal={showModal} alertClick={() => setShowModal(false)} />
    </PageTemplate>
  );
}

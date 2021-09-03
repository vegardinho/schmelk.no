import React from 'react';
import Stack from '@mui/material/Stack';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Typography } from '@material-ui/core';
import PageTemplate from './templates/PageTemplate';
import DesktopDate from '../components/simple/DesktopDate';
import DropdownButton from '../components/simple/DropdownButton';
import StyledButton from '../components/simple/StyledButton';

export default function EventScrape() {
  return (
    <PageTemplate>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DesktopDate label="Fra" />
          <DesktopDate label="Til" />
          <DropdownButton title="Type" items={['KU', 'SSF']} />
          <StyledButton>
            <Typography>Kjør magi!</Typography>
          </StyledButton>
        </Stack>
      </LocalizationProvider>
    </PageTemplate>
  );
}

import React, { useEffect, useState } from 'react';
import { Typography, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PageTemplate from './templates/PageTemplate';
import bible from '../img/bible.png';
import StyledButton from '../components/simple/StyledButton';
import norskBibel from '../content/bibelen';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    placeItems: 'center',
  },

  text: {
    paddingBottom: ({ theme }) => theme.spacing(4),
  },

});

export default function LaDetBliSchmelk() {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const bibleLines = norskBibel.split('\n');
  const [bibleLine, setBibleLine] = useState('');
  const [lineNo, setLineNo] = useState(0);

  const nextLine = () => {
    if (lineNo <= bibleLines.length) {
      setBibleLine(bibleLines[lineNo]);
    }
    setLineNo(lineNo + 1);
  };

  useEffect(() => {
    setBibleLine(bibleLines[lineNo]);
    setLineNo(lineNo + 1);
  }, []);

  return (
    <PageTemplate image={bible} imageCaption="bibelen">
      <div className={classes.container}>
        <Typography color="primary" className={classes.text}>{bibleLine}</Typography>
        <StyledButton handleClick={nextLine}>
          <Typography>Neste</Typography>
        </StyledButton>
      </div>
    </PageTemplate>
  );
}

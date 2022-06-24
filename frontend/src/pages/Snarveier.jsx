import React from 'react';
import { makeStyles } from '@material-ui/core';
import ButtonList from '../components/ButtonList';
import snarveier from '../content/snarveier';
import cow from '../img/cow.png';
import PageTemplate from './templates/PageTemplate';

const useStyles = makeStyles({
  buttonList: {
    maxHeight: '30vh',
    overflow: 'auto',
    placeItems: 'flex-start',
  },

});

export default function Snarveier() {
  const classes = useStyles();

  return (
    <PageTemplate image={cow} imageCaption="schmelk-kua">
      <div className={classes.buttonList}>
        <ButtonList items={snarveier} />
      </div>
    </PageTemplate>
  );
}

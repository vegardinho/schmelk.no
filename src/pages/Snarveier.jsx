import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import ButtonList from '../components/ButtonList';
import snarveier from '../content/snarveier';
import cow from '../img/cow.png';
import PageTemplate from './templates/PageTemplate';

const useStyles = makeStyles({
  buttonList: {
    maxHeight: '30vh',
    overflow: 'auto',
    placeItems: 'flex-start',
    // background: 'linear-gradient(rgba(255, 200, 176, 1) 30%, rgba(255, 200, 176, 0)), linear-gradient(rgba(255, 200, 176, 0), rgba(255, 200, 176, 1) 70%) 0 100%, radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%',
    // backgroundColor: 'transparent',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '100% 40px, 100% 40px, 100% 14px, 100% 14px',
    // backgroundAttachment: 'local, local, scroll, scroll',

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

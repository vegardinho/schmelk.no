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
    pointerEvents: 'all',
    // width: '60vw'
  },
  overlay: {
    position: 'absolute',
    maxHeight: '30vh',
    width: '90%',
    height: '30vh',
    pointerEvents: 'none',
    transition: 'background 1s',
    // background: ({ topReached, bottomReached }) => {
    //   if (topReached) {
    //     return 'linear-gradient(to bottom, rgba(255, 200, 176,0) 70%, rgba(255, 200, 176,1) 100%)';
    //   } if (bottomReached) {
    //     return 'linear-gradient(to top, rgba(255, 200, 176,0) 70%, rgba(255, 200, 176,1) 100%)';
    //   }
    //   return 'linear-gradient(to bottom, rgba(255, 200, 176,0) 70%, rgba(255, 200, 176,1) 100%),linear-gradient(to top, rgba(255, 200, 176,0) 70%, rgba(255, 200, 176,1) 100%)';
    // },
  },
});

export default function Snarveier() {
  const [topReached, setTopReached] = useState(true);
  const [bottomReached, setBottomReached] = useState(false);
  const classes = useStyles({ topReached, bottomReached });

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    const top = e.target.scrollTop === 0;

    if (top) {
      setTopReached(true);
      setBottomReached(false);
    } else if (bottom) {
      setBottomReached(true);
      setTopReached(false);
    } else {
      setTopReached(false);
      setBottomReached(false);
    }
  };

  const overlay = (direction) => `linear-gradient(${direction}, rgba(255, 200, 176,0) 70%, rgba(255, 200, 176,1) 100%)`;

  const returnOverlay = (top, bottom) => {
    if (top) {
      // return overlay('to bottom');
      return 'linear-gradient(to bottom, rgba(255,200,176,0) 0%, rgba(255,200,176,0) 30%, rgba(255,200,176,0) 70%, rgba(255,200,176,1) 100%)';
    } if (bottom) {
      return 'linear-gradient(to bottom, rgba(255,200,176,1) 0%, rgba(255,200,176,0) 30%, rgba(255,200,176,0) 70%, rgba(255,200,176,0) 100%)';
    }
    // return `${overlay('to bottom')}, ${overlay('to top')}`;
    return 'linear-gradient(to bottom, rgba(255, 200, 176,1) 0%, rgba(255, 200, 176,0) 30%, rgba(255, 200, 176,0) 70%, rgba(255, 200, 176,1) 100%)';
  };

  return (
    <PageTemplate image={cow} imageCaption="schmelk-kua">
      <div onScroll={(e) => handleScroll(e)} className={classes.buttonList}>
        <ButtonList items={snarveier}>
          <motion.div
            initial={{ background: returnOverlay(topReached, bottomReached) }}
            animate={{ background: returnOverlay(topReached, bottomReached) }}
            transition={{ background: { delay: 0 } }}
            className={classes.overlay}
          />
        </ButtonList>
      </div>
    </PageTemplate>
  );
}

import { makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import {
  motion, useAnimation,
} from 'framer-motion';
import React, { useEffect } from 'react';
import logo from '../img/schmelk.png';
import buttonItems from '../content/buttonItems';
import Layout from '../components/Layout';
import ButtonList from '../components/ButtonList';
import pageVariants from './templates/pageVariants';

const useStyles = makeStyles({
  logo: {
    width: 'min(53vh, 85vw)',
    margin: 'auto',
    display: 'block',
    marginBottom: ({ theme }) => `min(10vw, ${theme.spacing(6)}px)`,
  },

});

const imageVariants = {
  initial: {
    scale: 0,
    rotate: -1000,
  },
  start: {
    rotate: 0,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  loop: {
    scale: [1.01, 0.99],
    transition: {
      scale: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 2,
      },
    },
  },
};

const FrontPage = ({ siteLoaded, setSiteLoaded }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const animation = useAnimation();
  const location = useLocation();

  async function sequence(rotate) {
    if (rotate) {
      animation.set(imageVariants.initial);
      await animation.start(imageVariants.start);
    }
    animation.start(imageVariants.loop);
  }

  useEffect(() => {
    if (!siteLoaded) {
      sequence(true).then(() => {
        setSiteLoaded(true);
      });
    } else {
      sequence(false);
    }
  }, [location]);

  useEffect(() => {
    const img = new Image();
    img.src = logo.fileName;
  }, []);

  return (
    <motion.div
      variants={pageVariants}
      initial={siteLoaded ? 'hidden' : false}
      animate={siteLoaded ? 'visible' : false}
      exit="exit"
    >
      <Layout>
        <motion.div
          animate={animation}
        >
          <img src={logo} className={classes.logo} alt="logo" />
        </motion.div>
        <ButtonList items={buttonItems} />
      </Layout>

    </motion.div>
  );
};

export default FrontPage;

import { makeStyles } from '@material-ui/core';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import menuItems from '../../content/menuItems';
import LinkButton from '../simple/LinkButton';
import logo from '../../img/schmelk.png';
import cow from '../../img/cow.png';

const useStyles = makeStyles((theme) => ({
  mobileMenu: {
    top: '213vh',
    height: '70vh',
    background: theme.palette.secondary.main,
    width: '90vw',
    position: 'absolute',
    boxShadow:
      '0px 2px 4px -1px rgb(143 41 1 / 20%), 0px 4px 5px 0px rgb(143 41 1 / 14%), 0px 1px 10px 0px rgb(143 41 1 / 12%)',
    display: 'flex',
    flexDirection: 'column',
    placeContent: 'center',
    placeItems: 'center',
  },

  transparent: {
    top: 0,
    left: 0,
    height: '300vh',
    marginTop: '-200vh',
    width: '100vw',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
  },

  rope: {
    top: 0,
    height: '100%',
    width: '5px',
    background: '#ffffff',
    boxShadow: '0px 16px 4px -1px rgb(143 41 1 / 20%), 0px 4px 5px 0px rgb(143 41 1 / 14%), 0px 1px 10px 0px rgb(143 41 1 / 12%)',
  },

  ropes: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100vw',
    margin: '0 auto',
    height: '200vh',
    marginTop: '-150vh',
    top: 0,
    position: 'absolute',
  },

  schmelk: {
    width: '57vw',
    height: 'fit-content',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },

  links: {
    display: 'flex',
    flexDirection: 'column',
    placeContent: 'center',
    placeItems: 'center',
  },
}));

const transOpen = {
  duration: 3,
  type: 'spring',
  stiffness: 100,
};

const transClose = {

  duration: 3,
  type: 'spring',
  stiffness: 25,
};

const menuVariants = {
  hidden: {
    rotate: 90,
    transition: transClose,
  },
  visible: {
    rotate: 0,
    transition: transOpen,
  },
};

const ropeVariants = {
  hidden: {
    rotate: 90,
    transition: transClose,
  },
  visible: {
    rotate: 0,
    transition: transOpen,
  },
};

export default function MobileMenu({ menuOpened, setMenuOpened }) {
  useEffect(() => {
    const img = new Image();
    img.src = logo.fileName;
  }, []);

  const classes = useStyles();

  const setOverflow = () => {
    document.body.style.overflow = '';
  };

  return (
    <AnimatePresence onExitComplete={() => setOverflow()}>
      {menuOpened
      && (
      <>
        <div className={classes.ropes}>
          <motion.div
            variants={ropeVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={classes.rope}
          />
          <motion.div
            variants={ropeVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={classes.rope}
          />
        </div>
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={classes.transparent}
        >
          <div className={classes.mobileMenu}>
            <img src={cow} className={classes.schmelk} alt="" />
            <div className={classes.links}>
              {menuItems.map((item) => (
                <LinkButton setMenuOpened={setMenuOpened} item={item} key={item.text} />
              ))}
            </div>
          </div>
        </motion.div>

      </>
      )}
    </AnimatePresence>
  );
}

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { makeStyles, Typography, useTheme } from '@material-ui/core';
import StyledButton from './simple/StyledButton';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: {
    y: 'calc(50vh - 58%)',
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const useStyles = makeStyles({
  backdrop: {
    position: 'fixed',
    top: ({ theme }) => `-${theme.mixins.toolbar.minHeight}px`,
    left: '0',
    width: '100%',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: '1',
  },

  modal: ({ theme }) => ({

    [theme.breakpoints.down('xs')]: {
      maxWidth: '80vw',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '400px',
    },

    margin: '0 auto',
    padding: '40px 20px',
    background: theme.palette.secondary.light,
    borderRadius: '10px',
    textAlign: 'center',
    zIndex: '1',
  }),

});

const Modal = ({ showModal, alertClick }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <AnimatePresence>
      {showModal && (
      <motion.div
        className={classes.backdrop}
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div className={classes.modal} variants={modal}>
          <Typography>Arrangementsinfo kopiert til utklippstavlen.</Typography>
          <StyledButton handleClick={() => alertClick()}>
            <Typography>Lukk</Typography>
          </StyledButton>
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

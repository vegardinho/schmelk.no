import { Link } from 'react-router-dom';
import { useTheme, makeStyles } from '@material-ui/styles';

import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import pageVariants from './pageVariants';

const useStyles = makeStyles({
  image: {
    width: 'min(30vh, 85vw)',
    margin: 'auto',
    display: 'block',
    marginBottom: ({ theme }) => `min(10vw, ${theme.spacing(6)}px)`,
  },
});

export default function PageTemplate({ image, imageCaption, children }) {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Layout>
        <img src={image} className={classes.image} alt={imageCaption} />
        <>{children}</>
      </Layout>
    </motion.div>
  );
}

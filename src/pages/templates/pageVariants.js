const pageVariants = {
  hidden: {
    x: '100vw',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
    },
  },
};

export default pageVariants;

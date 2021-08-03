import urls from './schmelkUrls';

const buttonItems = [
  {
    text: 'Gi meg schmelk',
    /*     icon: <SubjectOutlined color="secondary" />, */
    dynamicPath: () => urls[Math.floor(Math.random() * urls.length)],
    external: true,
  },
  {
    text: 'Guds ord',
    /*     icon: <AddCircleOutlined color="secondary" />, */
    path: '/guds_ord',
  },
  {
    text: 'Korona',
    path: {
      pathname: 'http://korona.schmelk.no',
    },
    external: true,
  },
];

export default buttonItems;

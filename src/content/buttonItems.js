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
/*  {
    text: 'Arrangementshistorikk',
    path: '/get_events',
  },*/
];

export default buttonItems;

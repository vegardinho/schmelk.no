const snarveierDict = [
  {
    text: 'Alltinget',
    path: {
      pathname: 'http://alltinget.schmelk.no',
    },
    external: true,
  },
  {
    text: 'Google Drive',
    path: {
      pathname: 'http://drive.schmelk.no',
    },
    external: true,
  },
  {
    text: 'Shrek',
    path: {
      pathname: 'http://ku.samfundet.no/filmklubben',
    },
    external: true,
  },
  {
    text: 'Bar',
    path: {
      pathname: 'http://frank.riple.se',
    },
    external: true,
  },
  {
    text: 'RHPS',
    path: {
      pathname: 'http://rocky.riple.se',
    },
    external: true,
  },
  {
    text: 'Utskrift GA',
    path: {
      pathname: 'http://tollef.samfundet.no',
    },
    external: true,
  },
  {
    text: 'Ressurser',
    path: {
      pathname: 'http://ressurser.schmelk.no',
    },
    external: true,
  },
  {
    text: 'Sitat',
    path: {
      pathname: 'http://sitat.schmelk.no',
    },
    external: true,
  },
  {
    text: 'Rapportering',
    path: {
      pathname: 'http://rapp.schmelk.no',
    },
    external: true,
  },
  {
    text: 'WIFI-setup',
    path: {
      pathname: 'https://wlan.samfundet.no/',
    },
    external: true,
  },
  {
    text: 'h21',
    path: {
      pathname: 'http://h21.schmelk.no',
    },
    external: true,
  },
  {
    text: 'v22',
    path: {
      pathname: 'http://v22.schmelk.no',
    },
    external: true,
  },
  {
    text: 'v21',
    path: {
      pathname: 'http://v21.schmelk.no',
    },
    external: true,
  },
  {
    text: 'Foto',
    path: {
      pathname: 'http://foto.schmelk.no',
    },
    external: true,
  },
];

const getSortOrder = (prop) => (a, b) => {
  if (a[prop].toLowerCase() > b[prop].toLowerCase()) {
    return 1;
  } if (a[prop].toLowerCase() < b[prop].toLowerCase()) {
    return -1;
  }
  return 0;
};

export default snarveierDict.sort(getSortOrder('text'));

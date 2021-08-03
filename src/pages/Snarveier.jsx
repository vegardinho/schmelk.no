import React from 'react';
import ButtonList from '../components/ButtonList';
import snarveier from '../content/snarveier';
import cow from '../img/cow.png';
import PageTemplate from './templates/PageTemplate';

export default function Snarveier() {
  return (
    <PageTemplate image={cow} imageCaption="schmelk-kua">
      <ButtonList items={snarveier} />
    </PageTemplate>
  );
}

import React from 'react';
import { CardsColumnPropType, CardPropTypes } from '../../types';
import homePage from './HomePage.module.scss';
import Card from './Card';

const CardsColumn = ({
  data,
  isLoading
}: CardsColumnPropType) => {
  return (
    <section className={homePage['cards-column-container']}>
      {data.map((card: CardPropTypes) => <Card key={card.id} {...card} isLoading={isLoading}/>)}
    </section>
  )
}

export default CardsColumn;
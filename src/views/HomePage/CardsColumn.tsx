import React from 'react';
import { CardsColumnPropType, CardPropTypes } from '../../types';
import homePage from './HomePage.module.scss';
import Card from './Card';
import TextLoading from '../../loaders/TextLoading';

const CardsColumn = ({
  title,
  data,
  isLoading
}: CardsColumnPropType) => {
  return (
    <section className={homePage['cards-column-container']}>
      {isLoading ? <TextLoading /> : <h3>{title}</h3>}
      {data.map((card: CardPropTypes) => <Card key={card.id} {...card} isLoading={isLoading}/>)}
    </section>
  )
}

export default CardsColumn;
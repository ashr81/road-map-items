import React from 'react';
import homePage from './HomePage.module.scss';
import { CardPropTypes } from '../../types';

const Card = ({
  title,
  subTitle
}: CardPropTypes) => {
  return (
    <article className={homePage['card-container']}>
      <h3>{title}</h3>
      <p>{subTitle}</p>
    </article>
  )
}

export default Card;
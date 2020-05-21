import React from 'react';
import homePage from './HomePage.module.scss';
import { CardPropTypes } from '../../types';
import TextLoading from '../../loaders/TextLoading';

const Card = ({
  title,
  subTitle,
  isLoading
}: CardPropTypes) => {
  return (
    <article className={homePage['card-container']}>
      {isLoading ? <TextLoading /> : <h6>{title}</h6>}
      {isLoading ? <TextLoading width='100%' style={{}}/> : <p>{subTitle}</p>}
    </article>
  )
}

export default Card;
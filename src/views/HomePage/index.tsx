import React from 'react';
import homePage from './HomePage.module.scss';
import { HomePageViewPropType } from '../../types';
import CardsColumn from './CardsColumn';

const HomePageView = ({
  data,
  isLoading
}: HomePageViewPropType) => {
  return (
    <div className={homePage['home-page-container']}>
      <CardsColumn data={data} isLoading={isLoading}/>
    </div>
  )
}

export default HomePageView;
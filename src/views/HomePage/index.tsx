import React, { useEffect } from 'react';
import homePage from './HomePage.module.scss';
import { HomePageViewPropType, CardDataTypes } from '../../types';
import CardsColumn from './CardsColumn';

const HomePageView = ({
  data,
  isLoading,
  loadData
}: HomePageViewPropType) => {
  useEffect(() => {
    loadData()
  }, [loadData])
  console.log(data)
  return (
    <div className={homePage['home-page-container']}>
      {data.map(({ data, title }: any) => <CardsColumn data={data} title={title} isLoading={isLoading}/>)}
    </div>
  )
}

export default HomePageView;
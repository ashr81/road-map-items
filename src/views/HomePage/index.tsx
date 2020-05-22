import React, { useEffect } from 'react';
import homePage from './HomePage.module.scss';
import { HomePageViewPropType } from '../../types';
import CardsColumn from './CardsColumn';

const HomePageView = ({
  data,
  isLoading,
  loadData
}: HomePageViewPropType) => {

  useEffect(() => {
    // Data is loaded after 1000ms to mimik the loading state of the application.
    window.setTimeout(loadData, 1000)
  }, [loadData])

  return (
    <div className={homePage['home-page-container']}>
      {data.map(({ data, title, id }: any) => <CardsColumn key={id} data={data} title={title} isLoading={isLoading}/>)}
    </div>
  )
}

export default HomePageView;
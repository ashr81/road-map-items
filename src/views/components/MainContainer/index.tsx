/**
 * Shared component used in App component to have common styles for
 * the components in a page apart from Navbar.
 */
import React from 'react';
import mainContainer from './MainContainer.module.scss';
import { MainContainerPropTypes } from '../../../types'

const MainContainer = ({
    children
}: MainContainerPropTypes) => (
  <main className={mainContainer.container}>
    {children}
  </main>
)

export default MainContainer;
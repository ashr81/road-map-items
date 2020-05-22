import React from 'react';
import './App.scss';
import Navbar from './views/components/Navbar';
import MainContainer from './views/components/MainContainer';
import HomePage from './pages/HomePage';
import withStore from './hocs/withStore';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContainer>
        <HomePage />
      </MainContainer>
    </div>
  );
}

export default withStore(App);

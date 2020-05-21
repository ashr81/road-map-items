import React from 'react';
import './App.scss';
import Navbar from './views/components/Navbar';
import MainContainer from './views/components/MainContainer';
import HomePage from './pages/HomePage';

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

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/configureStore'

const withStore = (Component: React.FC) => (props: {}) => {
  return (
    <Provider store={store}>
      <Component {...props}/>
    </Provider>
  )
}

export default withStore;
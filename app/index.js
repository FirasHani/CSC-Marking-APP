import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './AppNavigator';
import store from './configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}

export default App;
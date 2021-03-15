/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';

import Router from 'navigation/Router';
import { colors } from 'config';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>
          <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
          <Router />
        </>
      </PersistGate>
    </Provider>
  );
};

export default App;

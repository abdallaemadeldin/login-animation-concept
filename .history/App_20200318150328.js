/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StatusBar } from 'react-native';
import WindowStack from './src/lib/WindowStack';

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <WindowStack />
    </>
  );
};

export default App;

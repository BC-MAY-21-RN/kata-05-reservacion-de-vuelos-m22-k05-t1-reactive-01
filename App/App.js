import React from 'react';
import {SafeAreaView} from 'react-native';
import MainStack from './src/hubs/MainStack';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;

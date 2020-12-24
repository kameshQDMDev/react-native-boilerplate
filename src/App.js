import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router/index';
import { StatusBar } from 'react-native';
// qdm-store
import { rootReducer } from 'qdm-store';

//redux
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// end

// store
const store = configureStore({
  reducer: rootReducer,
});


const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor="#4E37B2" />
          <Router />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

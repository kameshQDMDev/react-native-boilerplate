import React, { useEffect } from 'react';
import PublicStackNavigator from './publicStackNavigator';
import PrivateStackNavigator from './privateStackNavigator';
import AsyncStorage from '@react-native-community/async-storage';
import { localStorageKeys } from './../utils';

const Router = () => {
  let authToken = null;

  useEffect(() => {
    setTimeout(async () => {
      authToken = await AsyncStorage.getItem(localStorageKeys.AUTH_TOKEN);
    });
  }, []);

  if (authToken === null) {
    return <PublicStackNavigator />;
  } else {
    return <PrivateStackNavigator />;
  }
};

export default Router;

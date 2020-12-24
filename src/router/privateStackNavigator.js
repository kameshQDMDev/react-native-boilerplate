import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import {
  Home
} from '../screens';
import routes from './routes';

const Stack = createStackNavigator();

const PrivateStackNavigator = (props) => {
  return (
    <Stack.Navigator
      headerMode="none"
      style={{ cardStyle: { backgroundColor: '#FFFFFF' } }}
      screenOptions={{
        gestureEnabled: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name={routes.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default PrivateStackNavigator;

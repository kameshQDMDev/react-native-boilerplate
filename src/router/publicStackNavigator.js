import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import routes from './routes';
import {
  Login
} from '../screens';

const Stack = createStackNavigator();

const PublicStackNavigator = (props) => {
  return (
    <Stack.Navigator
      initialRouteName={routes.Login}
      headerMode="none"
      style={{ cardStyle: { backgroundColor: '#FFFFFF' } }}
      screenOptions={{
        gestureEnabled: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      {/* Login Screen */}
      <Stack.Screen name={routes.Login} component={Login} />
    </Stack.Navigator>
  );
};

export default PublicStackNavigator;

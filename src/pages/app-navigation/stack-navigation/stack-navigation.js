import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfilePageConnector} from '../..';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={ProfilePageConnector} />
    </Stack.Navigator>
  );
};

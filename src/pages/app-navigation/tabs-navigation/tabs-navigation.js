import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfilePageConnector} from '../..';

const Tabs = createBottomTabNavigator();

export const TabsNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#312C39',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarIconStyle: {
          display: 'none',
        },
      }}>
      <Tabs.Screen
        name="Home"
        component={ProfilePageConnector}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarLabel: 'Профиль',
          tabBarLabelStyle: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            textAlignVertical: 'center',
          },
        }}
      />
    </Tabs.Navigator>
  );
};

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ProfilePageConnector,
  OrdersHistoryConnector,
  PaymentMethodsConnector,
} from '../..';

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
        tabBarLabelStyle: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          textAlignVertical: 'center',
        },
      }}>
      <Tabs.Screen
        name="Home"
        component={ProfilePageConnector}
        options={{
          tabBarLabel: 'Профиль',
        }}
      />
      <Tabs.Screen
        name="Orders"
        component={OrdersHistoryConnector}
        options={{
          tabBarLabel: 'Заказы',
        }}
      />
      <Tabs.Screen
        name="PaymentMethods"
        component={PaymentMethodsConnector}
        options={{
          tabBarLabel: 'Методы платежа',
        }}
      />
    </Tabs.Navigator>
  );
};

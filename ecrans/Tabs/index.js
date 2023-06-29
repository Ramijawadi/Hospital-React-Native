/* eslint-disable prettier/prettier */

import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Messages from '../Messages';
import Settings from '../Settings';

const ButtomTabs = () => {
    const Tab = createMaterialBottomTabNavigator();
    return (
        <Tab.Navigator
          initialRouteName="tabs_home"
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            headerShown:false,
          }}
        >
          <Tab.Screen
            name="tabs_home"
            component={Home}
            options={{
              tabBarLabel: 'Dashboard',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={30} />
              ),
            }}
          />
          <Tab.Screen
            name="Messages"
            component={Messages}
            options={{
              tabBarLabel: 'Messages',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="chat" color={color} size={30} />
              ),
              tabBarBadge: 2,
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarLabel: 'Parametres',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-settings-outline" color={color} size={30} />
              ),
            }}
          />
        </Tab.Navigator>
      );
    }

export default ButtomTabs
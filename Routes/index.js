/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ButtomTabs from '../ecrans/Tabs';
import MessageDetails from '../ecrans/MessageDetails';
const Stack = createNativeStackNavigator();


const Routes = () => {
  return (
<NavigationContainer>


<Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={ButtomTabs}  />
        <Stack.Screen name="MessageDetails" component={MessageDetails} 
         options={{headerShown:true}}
        />
      </Stack.Navigator>

</NavigationContainer>
  );
};

export default Routes;

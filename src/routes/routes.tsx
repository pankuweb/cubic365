import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../constants';
import {Colors} from '../utils'; // Import your color constants

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#9e0fb5', // Set the header background color
        },
        headerTintColor: 'white', // Set the header text color
      }}>
      {routes.map(route => (
        <Stack.Screen
          key={route.name}
          options={{headerShown: route.headerShown}}
          name={route.name}
          component={route.component}
        />
      ))}
    </Stack.Navigator>
  );
}

export default AuthStack;

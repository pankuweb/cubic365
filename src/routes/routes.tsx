import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../constants';
const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
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

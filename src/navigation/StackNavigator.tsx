import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ScreenOne, ScreenTwo, ScreenThree, PersonScreen } from '../screens';

export type RootStackParams = {
  ScreenOne: undefined,
  ScreenTwo: undefined,
  ScreenThree: undefined,
  PersonScreen: { id: number, name: string },
}


const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="ScreenTwo"
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen
        name="ScreenOne" component={ ScreenOne }
        options={{
          title: 'Página 1',
          headerBackTitle: '', // Back o vacío para que lo determine el sistema operativo
        }}
       />
      <Stack.Screen
        name="ScreenTwo" component={ ScreenTwo }
        options={{
          title: 'Página 2',
        }}
       />
      <Stack.Screen
        name="ScreenThree" component={ ScreenThree }
        options={{
          title: 'Página 3',
        }}
       />

      <Stack.Screen
        name="PersonScreen" component={ PersonScreen }
        options={{
          title: 'PersonScreen',
        }}
       />
    </Stack.Navigator>
  );
};

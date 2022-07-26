import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigation/StackNavigator';
import { SideMenu } from './src/navigation/SideMenu';



const App = () => {
  return (
    <NavigationContainer>
      <SideMenu />
      {/* <StackNavigator /> */}

    </NavigationContainer>
  );
};


export default App;

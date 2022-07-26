import React from 'react';
import { Button, Pressable, Text, View } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';

import { styles } from '../theme/appTheme';
import { PersonScreen, ScreenTwo } from './';

interface Props extends StackScreenProps<any, any> {}

export const ScreenOne = ({ navigation }: Props ) => {

  return (
    <View style={ styles.globalMargin }>

      <Text style={ styles.title }>ScreenOne</Text>

      <Button
        title="Ir página 2"
        onPress={ () => navigation.navigate( ScreenTwo.name ) }
      />

      {/* <Button
        title="Ir a Persona"
        onPress={ () => navigation.navigate( PersonScreen.name ) }
      /> */}

      <Text style={ styles.subTitle }>Navegar con argumentos</Text>


      {/* <View style={{ flexDirection: 'row' }}> */}
      <View style={[ styles.row, styles.spaceAround ]}>

        <Pressable
          style={({ pressed }) => [
            styles.primaryButton,
            { backgroundColor: pressed ? 'gray' : 'orange' },
          ]}
          onPress={ () => navigation.navigate(PersonScreen.name, {
            id: 1,
            name: 'Pedro',
          }) }
        >
          <Text style={ styles.textWhite }>Pedro</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.primaryButton,
            { backgroundColor: pressed ? 'gray' : 'orange' },
          ]}
          onPress={ () => navigation.navigate(PersonScreen.name, {
            id: 2,
            name: 'Maria',
          }) }
        >
          <Text style={ styles.textWhite }>Maria</Text>
        </Pressable>


      </View>


    </View>
  );
};

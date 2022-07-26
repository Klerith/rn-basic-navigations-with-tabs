import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const ScreenTwo = () => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Back',
    });
  }, [navigation]);


  return (
    <View style={ styles.globalMargin }>

      <Text style={ styles.title }>ScreenTwo</Text>

      <Button
        title="Ir página 3"
        onPress={
          () => navigation.navigate('ScreenThree' as any)
        }
      />
    </View>
  );
};

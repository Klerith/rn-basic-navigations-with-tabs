import React, { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

import { RootStackParams } from '../navigation/StackNavigator';

// interface RouteParams {
//   id:   number;
//   name: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'>{}

export const PersonScreen = ({ route, navigation }: Props ) => {

  // const params = route.params as RouteParams;
  const params = route.params;

  // console.log( props );
  // console.log( JSON.stringify(props, null, 2) );

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [params, navigation]);


  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }> Persona Screen </Text>

        <Text style={ styles.subTitle }>{ JSON.stringify( params, null, 3 ) }</Text>
    </View>
  );
};



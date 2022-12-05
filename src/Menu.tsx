/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamsList} from '../App';

type Props = NativeStackScreenProps<BottomTabParamsList, 'Menu'>;

const Menu: FC<Props> = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Text style={{color: 'black'}}>Menu</Text>

      <Button
        onPress={() => navigation.navigate('ProfileStack', {screen: 'Profile'})}
        title="Profile"
      />

      <Button onPress={() => navigation.navigate('Counter')} title="Counter" />
    </View>
  );
};
export default Menu;

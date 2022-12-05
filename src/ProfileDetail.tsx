import React, {FC} from 'react';
import {View, Text} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfileStackParamsList} from '../App';
type Props = NativeStackScreenProps<ProfileStackParamsList, 'ProfileDetail'>;

const ProfileDetail: FC<Props> = ({route}) => {
  const {userID, userName} = route.params;
  return (
    <View style={{flex: 1}}>
      <Text style={{color: 'black'}}>User Id: {userID}</Text>
      <Text style={{color: 'black'}}>User Name: {userName}</Text>
    </View>
  );
};
export default ProfileDetail;

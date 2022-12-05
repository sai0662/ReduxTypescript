import React from 'react';
import {View, Text, Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfileStackParamsList} from '../App';
type Props = NativeStackScreenProps<ProfileStackParamsList, 'Profile'>;

const Profile = ({navigation, route}: Props) => {
  console.log('route', route.params);

  return (
    <View style={{flex: 1}}>
      <Text style={{color: 'black'}}>ProfileXXX</Text>

      <Button
        onPress={() =>
          navigation.navigate('ProfileDetail', {
            userID: 12324,
            userName: 'sai teja',
          })
        }
        title="Go to Profile Detail Page"
      />
    </View>
  );
};
export default Profile;

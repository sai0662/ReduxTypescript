import {FC} from 'react';
import {View, Text} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamsList} from '../App';
type Props = NativeStackScreenProps<BottomTabParamsList, 'Counter'>;

const Counter: FC<Props> = () => {
  return (
    <View style={{flex: 1}}>
      <Text>This is Counter Page</Text>
    </View>
  );
};

export default Counter;

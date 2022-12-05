import React from 'react';

import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Counter from './src/Counter';
import Menu from './src/Menu';
import Profile from './src/Profile';
import ProfileDetail from './src/ProfileDetail';

export type ProfileStackParamsList = {
  Profile: {useName?: string};
  ProfileDetail: {userID?: number | string; userName?: string};
};

const Stack = createNativeStackNavigator<ProfileStackParamsList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
    </Stack.Navigator>
  );
};

export type BottomTabParamsList = {
  Menu: undefined;
  ProfileStack: NavigatorScreenParams<ProfileStackParamsList>;
  Counter: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamsList>();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Menu" component={Menu} />
        <Tab.Screen
          name="ProfileStack"
          options={{headerShown: false}}
          component={ProfileStack}
        />
        <Tab.Screen name="Counter" component={Counter} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

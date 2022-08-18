import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../../screens/native-stack/SignInScreen';
import SignUpScreen from '../../screens/native-stack/SignUpScreen';
import SplashScreen from '../../screens/native-stack/SplashScreen';
import SignUpAddressScreen from '../../screens/native-stack/SignUpAddressScreen';
import SuccessOrderScreen from '../../screens/native-stack/SuccessOrderScreen';
import SuccessSignUpScreen from '../../screens/native-stack/SuccessSignUpScreen';
import EditProfileScreen from '../../screens/native-stack/EditProfileScreen';

import ContentTabs from '../bottom-tabs';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpAddressScreen"
        component={SignUpAddressScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessOrderScreen"
        component={SuccessOrderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessSignUpScreen"
        component={SuccessSignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContentTabs"
        component={ContentTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

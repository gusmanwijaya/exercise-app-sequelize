import {View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import ProfileItemList from '../../../components/ProfileItemList';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountRoute = () => {
  const navigation = useNavigation();

  const handleSignOut = async () => {
    await AsyncStorage.multiRemove(['token']);
    await AsyncStorage.clear();
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'SignInScreen',
        },
      ],
    });
  };

  return (
    <View style={tw.style('pt-[8px] px-[24px]')}>
      <ProfileItemList
        text="Edit Profile"
        handlePress={() => navigation.navigate('EditProfileScreen')}
      />
      <ProfileItemList text="Security" />
      <ProfileItemList text="Payments" />
      <ProfileItemList text="Sign Out" handlePress={handleSignOut} />
    </View>
  );
};

export default AccountRoute;

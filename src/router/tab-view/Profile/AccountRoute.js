import {View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import ProfileItemList from '../../../components/ProfileItemList';

const AccountRoute = () => {
  const navigation = useNavigation();

  return (
    <View style={tw.style('pt-[8px] px-[24px]')}>
      <ProfileItemList
        text="Edit Profile"
        handlePress={() => navigation.navigate('EditProfileScreen')}
      />
      <ProfileItemList text="Home Address" />
      <ProfileItemList text="Security" />
      <ProfileItemList text="Payments" />
    </View>
  );
};

export default AccountRoute;

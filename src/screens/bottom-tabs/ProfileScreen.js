import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const ProfileScreen = () => {
  return (
    <View style={tw.style('flex-1 justify-center items-center bg-white')}>
      <Text
        style={tw.style('text-[20px] text-[#020202] text-center', {
          fontFamily: 'Poppins-Regular',
        })}>
        Profile Screen
      </Text>
    </View>
  );
};

export default ProfileScreen;

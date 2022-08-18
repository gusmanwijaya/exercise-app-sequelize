import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import IconNext from '../../assets/Icon/ic-next.svg';

const ProfileItemList = ({text, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <View style={tw.style('flex-row justify-between items-center py-[8px]')}>
        <Text
          style={tw.style('text-[14px] text-[#020202]', {
            fontFamily: 'Poppins-Regular',
          })}>
          {text}
        </Text>
        <IconNext />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileItemList;

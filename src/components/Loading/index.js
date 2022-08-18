import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Loading = () => {
  return (
    <View
      style={tw.style(
        'absolute flex-1 w-full h-full justify-center items-center',
        {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
      )}>
      <ActivityIndicator size="large" color="#1ABC9C" />
      <Text
        style={tw.style('text-[12px] mt-[12px]', {
          fontFamily: 'Poppins-Regular',
        })}>
        Loading...
      </Text>
    </View>
  );
};

export default Loading;

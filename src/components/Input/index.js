import {View, Text, TextInput} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Input = ({label, placeholder, ...props}) => {
  return (
    <View>
      <Text
        style={tw.style('text-[16px] text-[#020202]', {
          fontFamily: 'Poppins-Regular',
        })}>
        {label}
      </Text>
      <TextInput
        style={tw.style('border border-[#020202] rounded-[8px] p-[10px]')}
        placeholder={placeholder}
        {...props}
      />
    </View>
  );
};

export default Input;

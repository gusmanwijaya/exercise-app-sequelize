import {Text, View} from 'react-native';
import React from 'react';
import Number from '../Number';
import tw from 'twrnc';

const ItemValue = ({label, value, color, type}) => {
  return (
    <View style={tw.style('flex-row justify-between')}>
      <Text
        style={tw.style('text-[14px] text-[#8D92A3]', {
          fontFamily: 'Poppins-Regular',
        })}>
        {label}
      </Text>
      {type === 'currency' ? (
        <Number number={value} type="currency" />
      ) : (
        <Text
          style={tw.style('text-[14px]', {
            fontFamily: 'Poppins-Regular',
            color,
          })}>
          {value}
        </Text>
      )}
    </View>
  );
};

export default ItemValue;

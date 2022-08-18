import {Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from 'twrnc';
import IconButtonPlus from '../../assets/Icon/ic-button-plus.svg';
import IconButtonMin from '../../assets/Icon/ic-button-min.svg';

const Counter = ({handleValueChange}) => {
  const [displayValue, setDisplayValue] = useState(1);

  useEffect(() => {
    handleValueChange(displayValue);
  }, [displayValue, handleValueChange]);

  const handleCount = type => {
    let value = displayValue;

    if (type === 'plus') {
      value = displayValue + 1;
    }

    if (type === 'minus') {
      if (displayValue > 1) {
        value = displayValue - 1;
      }
    }

    setDisplayValue(value);
    handleValueChange(value);
  };

  return (
    <View style={tw.style('flex-row items-center')}>
      <TouchableOpacity
        onPress={() => handleCount('minus')}
        activeOpacity={0.7}>
        <IconButtonMin />
      </TouchableOpacity>
      <Text
        style={tw.style('mx-[10px] text-[16px] text-[#020202]', {
          fontFamily: 'Poppins-Regular',
        })}>
        {displayValue}
      </Text>
      <TouchableOpacity onPress={() => handleCount('plus')} activeOpacity={0.7}>
        <IconButtonPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

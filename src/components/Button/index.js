import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Button = ({text, color, textColor, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <View
        style={tw.style(
          `${
            color.includes('#') ? `bg-[${color}]` : `bg-${color}`
          } p-[12px] rounded-[8px]`,
        )}>
        <Text
          style={tw.style(
            `text-[14px] ${
              textColor.includes('#')
                ? `text-[${textColor}]`
                : `text-${textColor}`
            } text-center`,
            {
              fontFamily: 'Poppins-Medium',
            },
          )}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

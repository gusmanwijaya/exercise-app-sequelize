import {Text} from 'react-native';
import React from 'react';
import NumberFormat from 'react-number-format';
import tw from 'twrnc';

const Number = ({number, type}) =>
  type === 'decimal' ? (
    // Format for rating (example: 4.6)
    <NumberFormat
      value={number}
      displayType="text"
      renderText={value => (
        <Text
          style={tw.style('text-[12px] text-[#8D92A3]', {
            fontFamily: 'Poppins-Regular',
          })}>
          {value}
        </Text>
      )}
      decimalSeparator="."
      decimalScale={1}
      fixedDecimalScale
    />
  ) : (
    // Format for Indonesian's money (example: IDR 15.000)
    <NumberFormat
      value={number}
      displayType="text"
      renderText={value => (
        <Text
          style={tw.style('text-[12px] text-[#8D92A3]', {
            fontFamily: 'Poppins-Regular',
          })}>
          {value}
        </Text>
      )}
      decimalSeparator=","
      thousandSeparator="."
      prefix="IDR "
    />
  );

export default Number;

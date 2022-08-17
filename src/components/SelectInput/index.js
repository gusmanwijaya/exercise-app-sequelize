import {View, Text} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import tw from 'twrnc';

const SelectInput = ({
  label,
  placeholder,
  data = [],
  selectedValue,
  setValueChange,
}) => {
  return (
    <View>
      <Text
        style={tw.style('text-[16px] text-[#020202]', {
          fontFamily: 'Poppins-Regular',
        })}>
        {label}
      </Text>
      <View
        style={tw.style(
          'border border-[#020202] rounded-[8px] px-[2px] py-[0px]',
        )}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={itemValue => setValueChange(itemValue)}>
          <Picker.Item label={placeholder} value="" />
          {data.length > 0 &&
            data.map((value, index) => (
              <Picker.Item key={index} label={value} value={value} />
            ))}
        </Picker>
      </View>
    </View>
  );
};

export default SelectInput;

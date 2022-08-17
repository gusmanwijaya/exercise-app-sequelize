import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import IconBack from '../../assets/Icon/ic-back.svg';
import tw from 'twrnc';

const Header = ({title, subTitle, handleBack, imgSource}) => {
  return (
    <View
      style={tw.style(
        'bg-white px-[24px] android:pt-[30px] ios:pt-[60px] pb-[24px] flex-row items-center',
      )}>
      {handleBack && (
        <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
          <View style={tw.style('p-[16px] mr-[16px] ml-[-10px]')}>
            <IconBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text
          style={tw.style('text-[22px] text-[#020202]', {
            fontFamily: 'Poppins-Medium',
          })}>
          {title}
        </Text>
        <Text
          style={tw.style('text-[14px] text-[#8D92A3]', {
            fontFamily: 'Poppins-Light',
          })}>
          {subTitle}
        </Text>
      </View>
      {imgSource && (
        <View style={tw.style('ios:ml-[150px] android:ml-[170px]')}>
          <Image source={imgSource} style={tw.style('rounded-[8px]')} />
        </View>
      )}
    </View>
  );
};

export default Header;

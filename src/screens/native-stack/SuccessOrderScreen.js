import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import SuccessOrderIllustration from '../../assets/Ilustration/SuccessOrder.svg';
import Button from '../../components/Button';
import Gap from '../../components/Gap';

const SuccessOrderScreen = () => {
  return (
    <View style={tw.style('flex-1 justify-center items-center bg-white')}>
      <View style={tw.style('w-[200px] h-[177px]')}>
        <SuccessOrderIllustration />
      </View>
      <Gap height={30} />
      <Text
        style={tw.style('text-[20px] text-[#020202] text-center', {
          fontFamily: 'Poppins-Regular',
        })}>
        You've Made Order
      </Text>
      <Gap height={6} />
      <View style={tw.style('px-20')}>
        <Text
          style={tw.style('text-[14px] text-[#8D92A3] text-center', {
            fontFamily: 'Poppins-Light',
          })}>
          Just stay at home while we are preparing your best foods
        </Text>
      </View>
      <Gap height={30} />
      <View style={tw.style('w-full ios:px-21 android:px-24')}>
        <Button color="#FFC700" textColor="#020202" text="Order Other Foods" />
      </View>
      <Gap height={12} />
      <View style={tw.style('w-full ios:px-21 android:px-24')}>
        <Button text="View My Order" color="#8D92A3" textColor="white" />
      </View>
    </View>
  );
};

export default SuccessOrderScreen;

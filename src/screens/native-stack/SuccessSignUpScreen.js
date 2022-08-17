import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import SuccessSignUpIllustration from '../../assets/Ilustration/SuccessSignUp.svg';
import Gap from '../../components/Gap';
import Button from '../../components/Button';

const SuccessSignUpScreen = () => {
  return (
    <View style={tw.style('flex-1 justify-center items-center bg-white')}>
      <View style={tw.style('w-[200px] h-[290px]')}>
        <SuccessSignUpIllustration />
      </View>
      <Gap height={30} />
      <Text
        style={tw.style('text-[20px] text-[#020202] text-center', {
          fontFamily: 'Poppins-Regular',
        })}>
        Yeay! Completed
      </Text>
      <Gap height={6} />
      <View style={tw.style('ios:px-22 android:px-24')}>
        <Text
          style={tw.style('text-[14px] text-[#8D92A3] text-center', {
            fontFamily: 'Poppins-Light',
          })}>
          Now you are able to order some foods as a self-reward
        </Text>
      </View>
      <Gap height={30} />
      <View style={tw.style('w-full ios:px-24 android:px-26')}>
        <Button color="#FFC700" textColor="#020202" text="Find Foods" />
      </View>
    </View>
  );
};

export default SuccessSignUpScreen;

import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import tw from 'twrnc';
import Logo from '../../assets/Ilustration/Logo.svg';
import Gap from '../../components/Gap';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignInScreen');
    }, 3000);
  }, [navigation]);

  return (
    <View style={tw.style('flex-1 justify-center items-center bg-[#FFC700]')}>
      <Logo />
      <Gap height={38} />
      <Text
        style={tw.style('text-[32px] text-[#020202]', {
          fontFamily: 'Poppins-Medium',
        })}>
        Food Market
      </Text>
    </View>
  );
};

export default SplashScreen;

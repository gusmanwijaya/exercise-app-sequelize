import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import tw from 'twrnc';
import Logo from '../../assets/Ilustration/Logo.svg';
import Gap from '../../components/Gap';
import {useNavigation} from '@react-navigation/native';
import {getData} from '../../utils/asyncStorage';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(async () => {
      const token = await getData('token');
      if (token) {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'ContentTabs',
            },
          ],
        });
      } else {
        navigation.replace('SignInScreen');
      }
    }, 2000);
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

import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import tw from 'twrnc';
import Logo from '../../assets/Ilustration/Logo.svg';
import Gap from '../../components/Gap';
import {useNavigation} from '@react-navigation/native';
import {getData} from '../../utils/asyncStorage';
import {setAccessToken, fetchRefreshToken} from '../../redux/session/actions';
import {useDispatch} from 'react-redux';
import jwtDecode from 'jwt-decode';

const SplashScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(async () => {
      const accessToken = await getData('access-token');
      if (accessToken) {
        const decodeAccessToken = jwtDecode(accessToken);
        const user_id = decodeAccessToken?.id;

        dispatch(setAccessToken(accessToken));
        dispatch(fetchRefreshToken(user_id));

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
  }, [navigation, dispatch]);

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
